export const styles = {
    textField: {
        width: "100%",
       "& .MuiOutlinedInput-root": {
           "& fieldset": {
               //backgroundColor: "mainPalette.lightBlue",
               borderWidth: "2px",
               borderRadius: 4,
              borderColor: "mainPalette.darkBlue",
           },
           "&:hover fieldset": {
               borderColor: "mainPalette.darkBlue",
           },
           "&.Mui-focused fieldset": {
               borderColor: "mainPalette.darkBlue",
           },
         },
   },
   emptyTextField: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderWidth: "2px",
            borderRadius: 4,
           borderColor: "mainPalette.gray",
        },
        "&:hover fieldset": {
            borderColor: "mainPalette.gray",
        },
        "&.Mui-focused fieldset": {
            borderColor: "mainPalette.gray",
        },
      },
    },
    checkbox: {
        '&.Mui-checked': { color: "mainPalette.darkBlue" } 
    },
};