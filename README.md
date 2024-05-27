# **For make dom to pdf pleasse use this command**

`npm i jspdf@1.5.30`

You can choose another version. However, I have encountered a lot of complexity when it comes to measuring to PDF the DOM in another version. So, I am using this specific version.

### **please follow app.js. Basic instruction bellow-**

######first import jspdf

`import jsPDF from "jspdf"`



    // please write this blank function must for make page setup correct  
    const noop = ()=>{}
    
    // use this function on pdf generate button's click event
    const makePdf = () => {
        const doc = new jsPDF({
            orientation: "p",
            unit: "pt",
            format: "a4"
        });
        
        // please get the content by id or ref what you want to print/make pdf
        const element = document.getElementById("content");
        
        const margins = {
            left: 15,
            top: 15,
            bottom: 15
        };
        const options = {
            width: 550
        };
        
        doc.fromHTML(element, margins.left, margins.top, options, noop, margins);
        doc.save("hmw.pdf");
    }
