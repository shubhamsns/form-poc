export const currentData = {
  radio: {
    source: [
      {
        value: "Food is not at all affected (2-3 drops of oil)",
        text: "Food is not at all affected (2-3 drops of oil)",
        color: "#1C1C1C",
        radio: {
          source: [
            {
              value:
                "Outer packaging issue (food is not spilled) eg. No tape/broken seal/wrong tape",
              text: "Outer packaging issue (food is not spilled) eg. No tape/broken seal/wrong tape",
              color: "#1C1C1C",
              radio: {
                source: [
                  {
                    value: "No tape or seal on the package",
                    text: "No tape or seal on the package",
                    color: "#1C1C1C",
                    url: "get_refund_options_v2",
                  },
                  {
                    value: "Wrong tape has been used (eg Non-zomato tape)",
                    text: "Wrong tape has been used (eg Non-zomato tape)",
                    color: "#1C1C1C",
                    url: "get_refund_options_v2",
                  },
                  {
                    value: "Broken/Open seal",
                    text: "Broken/Open seal",
                    color: "#1C1C1C",
                    url: "get_refund_options_v2",
                  },
                  {
                    value: "Outer packaging is torn",
                    text: "Outer packaging is torn",
                    color: "#1C1C1C",
                    url: "get_refund_options_v2",
                  },
                  {
                    value: "Others",
                    text: "Others",
                    color: "#1C1C1C",
                    url: "get_refund_options_v2",
                    comment_box: {
                      placeholder: "Add description",
                      rows: 3,
                      input: {
                        key: "issue_comment_key",
                      },
                      optional: false,
                      min_limit: 30,
                    },
                  },
                ],
                input: {
                  key: "attribution_radio_btn_key",
                },
                title: {
                  text: "What is the packaging issue in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
              },
            },
            {
              value: "Few drops of oil spilled",
              text: "Few drops of oil spilled",
              color: "#1C1C1C",
              url: "get_refund_options_v2",
            },
            {
              value: "Food got displaced in the packaging",
              text: "Food got displaced in the packaging",
              color: "#1C1C1C",
              url: "get_refund_options_v2",
            },
            {
              value: "Other",
              text: "Other",
              color: "#1C1C1C",
              comment_box: {
                placeholder: "Add description",
                rows: 3,
                input: {
                  key: "issue_comment_key",
                },
                optional: false,
                min_limit: 30,
              },
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    type: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Box/container not properly sealed",
                    type: "Box/container not properly sealed",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
          ],
          input: {
            key: "issue_radio_btn",
          },
          title: {
            text: "What is the issue highlighted by customer in the photos?",
            color: "#1C1C1C",
            type: "bold",
          },
        },
      },
      {
        value: "Food is slightly affected but can be consumed",
        text: "Food is slightly affected but can be consumed",
        color: "#1C1C1C",
        radio: {
          source: [
            {
              value: "Oil/gravy spilled out of container",
              text: "Oil/gravy spilled out of container",
              color: "#1C1C1C",
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "No tape or seal on the package",
                    type: "No tape or seal on the package",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    type: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
            {
              value: "Beverage spilled/leaked",
              text: "Beverage spilled/leaked",
              color: "#1C1C1C",
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "No tape or seal on the package",
                    type: "No tape or seal on the package",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Open cap/lid",
                    type: "Open cap/lid",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Wrong packaging (eg Beverage packed with burger)",
                    type: "Wrong packaging (eg Beverage packed with burger)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Broken bottle/smashed container",
                    type: "Broken bottle/smashed container",
                    color: "#1C1C1C",
                  },
                  {
                    text: "No holder/improper packaging",
                    type: "No holder/improper packaging",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
            {
              value: "Food is smashed (eg. Pizza displaced)",
              text: "Food is smashed (eg. Pizza displaced)",
              color: "#1C1C1C",
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    type: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    type: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
            {
              value: "Other",
              text: "Other",
              color: "#1C1C1C",
              comment_box: {
                placeholder: "Add description",
                rows: 3,
                input: {
                  key: "issue_comment_key",
                },
                optional: false,
                min_limit: 30,
              },
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    type: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Box/container not properly sealed",
                    type: "Box/container not properly sealed",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
          ],
          input: {
            key: "issue_radio_btn",
          },
          title: {
            text: "What is the issue highlighted by customer in the photos?",
            color: "#1C1C1C",
            type: "bold",
          },
        },
      },
      {
        value: "Food can not be consumed",
        text: "Food can not be consumed",
        color: "#1C1C1C",
        radio: {
          source: [
            {
              value: "Oil/gravy spilled out of container",
              text: "Oil/gravy spilled out of container",
              color: "#1C1C1C",
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "No tape or seal on the package",
                    type: "No tape or seal on the package",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    type: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
            {
              value: "Beverage spilled/leaked",
              text: "Beverage spilled/leaked",
              color: "#1C1C1C",
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "No tape or seal on the package",
                    type: "No tape or seal on the package",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Open cap/lid",
                    type: "Open cap/lid",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Wrong packaging (eg Beverage packed with burger)",
                    type: "Wrong packaging (eg Beverage packed with burger)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Broken bottle/smashed container",
                    type: "Broken bottle/smashed container",
                    color: "#1C1C1C",
                  },
                  {
                    text: "No holder/improper packaging",
                    type: "No holder/improper packaging",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
            {
              value: "Food is smashed (eg. Pizza displaced)",
              text: "Food is smashed (eg. Pizza displaced)",
              color: "#1C1C1C",
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    type: "Mishandling of delivery box (eg. Displaced pizza on one side, Box is smashed, Cake displaced/inverted)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    type: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
            {
              value: "Other",
              text: "Other",
              color: "#1C1C1C",
              comment_box: {
                placeholder: "Add description",
                rows: 3,
                input: {
                  key: "issue_comment_key",
                },
                optional: false,
                min_limit: 30,
              },
              check_box: {
                input: {
                  key: "attribution_check_box",
                },
                source: [
                  {
                    text: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    type: "Incorrect container type (eg. Aluminum container for gravies, Pizza-holder missing, Cupcakes packed without holders)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    type: "Incorrect container size (eg. Box too small or large with toppings stuck on top)",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Box/container not properly sealed",
                    type: "Box/container not properly sealed",
                    color: "#1C1C1C",
                  },
                  {
                    text: "Others",
                    type: "Others",
                    color: "#1C1C1C",
                  },
                ],
                title: {
                  text: "What is the reason for food spillage in the photos?",
                  color: "#1C1C1C",
                  type: "bold",
                },
                url: "get_refund_options_v2",
              },
            },
          ],
          input: {
            key: "issue_radio_btn",
          },
          title: {
            text: "What is the issue highlighted by customer in the photos?",
            color: "#1C1C1C",
            type: "bold",
          },
        },
      },
    ],
    input: {
      key: "severity_radio_btn",
    },
    title: {
      text: "What is the condition of the food delivered?",
      color: "#1C1C1C",
      type: "bold",
    },
  },
};
