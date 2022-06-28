import React from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function App() {
  return (
    <div className="App">
      <FieldArray />
    </div>
  );
}

export default App;

const defaultObj = [
  { type: "card", title: "hello world" },
  {
    type: "radio",
    name: "severity_radio_btn",
    title: "What is the condition of the food delivered?",
    options: [
      {
        value: "Food is not at all affected (2-3 drops of oil)",
        title: "Food is not at all affected (2-3 drops of oil)",
        input: {
          type: "radio",
          name: "attribution_radio_btn_key",
          title: "What is the packaging issue in the photos?",
          options: [
            {
              value: "No tape or seal on the package",
              title: "No tape or seal on the package",
            },
            {
              value: "Wrong tape has been used (eg Non-zom tape)",
              title: "Wrong tape has been used (eg Non-zom tape)",
            },
            {
              value: "Broken/Open seal",
              title: "Broken/Open seal",
            },
            {
              value: "Broken/Open seal",
              title: "Broken/Open seal",
              input: {
                type: "textarea",
                name: "others",
                title: "Others",
              },
            },
          ],
        },
      },
      {
        value: "Food is slightly affected but can be consumed",
        title: "Food is slightly affected but can be consumed",
        url: "get_refund_options_v2",
        input: {
          type: "checkbox",
          name: "attribution_check_box",
          title: "What is the reason for food spillage in the photos?",
          options: [
            {
              title:
                "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
              value:
                "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
            },
            {
              title: "No tape or seal on the package",
              value: "No tape or seal on the package",
            },
            {
              title:
                "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
              value:
                "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
            },
            {
              title: "Others",
              value: "Others",
            },
          ],
        },
      },
    ],
  },
];

function FieldArray() {
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      test: defaultObj,
    },
  });
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <div>
      {fields.map(({ id, ...field }, index) => {
        return (
          <div key={id}>
            <RenderInput
              control={control}
              append={append}
              remove={remove}
              replace={replace}
              index={index}
              register={register}
              {...field}
            />
          </div>
        );
      })}
      <DevTool control={control} />
    </div>
  );
}

function RenderInput({ type, ...rest }) {
  if (type === "card") return <h3>{rest.title}</h3>;

  if (type === "radio" || type === "checkbox") {
    return <RadioOrCheckbox type={type} {...rest} />;
  }

  if (type === "textarea") {
    const { register, index, name } = rest;
    return <textarea {...register(`test.${index}.${name}`)} />;
  }
}

function RadioOrCheckbox(props) {
  const {
    title,
    name,
    index,
    control,
    options,
    register,
    append,
    remove,
    replace,
    type,
  } = props;

  const { onChange, name: regNmae, ref } = register(`test.${index}.${name}`);

  const fields = useWatch({ control, name: "test" });

  return (
    <div>
      <h5>{title}</h5>

      {options.map((op) => (
        <div>
          <label>
            <input
              control={control}
              ref={ref}
              name={regNmae}
              type={type}
              onChange={(e) => {
                onChange(e);
                let tempF = [...fields];

                if (index + 1 < fields.length) {
                  tempF.length = index + 1;
                }
                if (op.input) {
                  tempF.push(op.input);
                }
                replace(tempF);
              }}
              value={op.value}
            />
            {op.title}
          </label>
        </div>
      ))}
    </div>
  );
}
