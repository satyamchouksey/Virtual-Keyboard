export const isAlpha = (char) => {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(char);
};

export const getRandomList = () => {
    let list = [
        {
            primary: "`",
            secondary: "~",
            type: "commonButton"
        },
        {
            primary: "1",
            secondary: "!",
            type: "commonButton"
        },
        {
            primary: "2",
            secondary: "@",
            type: "commonButton"
        },
        {
            primary: "3",
            secondary: "#",
            type: "commonButton"
        },
        {
            primary: "4",
            secondary: "$",
            type: "commonButton"
        },
        {
            primary: "5",
            secondary: "%",
            type: "commonButton"
        },
        {
            primary: "6",
            secondary: "^",
            type: "commonButton"
        },
        {
            primary: "7",
            secondary: "&",
            type: "commonButton"
        },
        {
            primary: "8",
            secondary: "*",
            type: "commonButton"
        },
        {
            primary: "9",
            secondary: "(",
            type: "commonButton"
        },
        {
            primary: "0",
            secondary: ")",
            type: "commonButton"
        },
        {
            primary: "-",
            secondary: "_",
            type: "commonButton"
        },
        {
            primary: "=",
            secondary: "+",
            type: "commonButton"
        },
        {
            primary: "Q",
            type: "commonButton"
        },
        {
            primary: "W",
            type: "commonButton"
        },
        {
            primary: "E",
            type: "commonButton"
        },
        {
            primary: "R",
            type: "commonButton"
        },
        {
            primary: "T",
            type: "commonButton"
        },
        {
            primary: "Y",
            type: "commonButton"
        },
        {
            primary: "U",
            type: "commonButton"
        },
        {
            primary: "I",
            type: "commonButton"
        },
        {
            primary: "O",
            type: "commonButton"
        },
        {
            primary: "P",
            type: "commonButton"
        },
        {
            primary: "[",
            secondary: "{",
            type: "commonButton"
        },
        {
            primary: "]",
            secondary: "}",
            type: "commonButton"
        },
        {
            primary: "\\",
            secondary: "|",
            type: "commonButton"
        },
        {
            primary: "A",
            type: "commonButton"
        },
        {
            primary: "S",
            type: "commonButton"
        },
        {
            primary: "D",
            type: "commonButton"
        },
        {
            primary: "F",
            type: "commonButton"
        },
        {
            primary: "G",
            type: "commonButton"
        },
        {
            primary: "H",
            type: "commonButton"
        },
        {
            primary: "J",
            type: "commonButton"
        },
        {
            primary: "K",
            type: "commonButton"
        },
        {
            primary: "L",
            type: "commonButton"
        },
        {
            primary: ";",
            secondary: ":",
            type: "commonButton"
        },
        {
            primary: "'",
            secondary: '"',
            type: "commonButton"
        },
        {
            primary: "Z",
            type: "commonButton"
        },
        {
            primary: "X",
            type: "commonButton"
        },
        {
            primary: "C",
            type: "commonButton"
        },
        {
            primary: "V",
            type: "commonButton"
        },
        {
            primary: "B",
            type: "commonButton"
        },
        {
            primary: "N",
            type: "commonButton"
        },
        {
            primary: "M",
            type: "commonButton"
        },
        {
            primary: ",",
            secondary: "<",
            type: "commonButton"
        },
        {
            primary: ".",
            secondary: ">",
            type: "commonButton"
        },
        {
            primary: "/",
            secondary: "?",
            type: "commonButton"
        }
    ];
    const sortedList = list.sort(() => Math.random() - 0.5);
    return sortedList;
};
