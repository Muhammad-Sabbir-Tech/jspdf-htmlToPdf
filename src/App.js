import React from 'react';
import jsPDF from 'jspdf'

// blank function for set pdf margin correct
const noop = () => {
};

function App(props) {
    // print function
    const makePdf = () => {
        const doc = new jsPDF({
            orientation: "p",
            unit: "pt",
            format: "a4"
        });

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
    return (
        <>
            {/*pdf button*/}
            <button onClick={makePdf}>generate pdf</button>
            <h3>please click the generate pdf button for make pdf</h3>
            <div style={{display: "none"}}>
                {/*print container*/}
                <div id={'content'} style={{textAlign: "justify"}}>
                    <h3>version - "jspdf": "^1.5.3",</h3>
                    <p>
                        How might we use sightseeing to challenge refugee camp conditions.

                        π Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                        in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do
                        we
                        use it? It is a long established fact that a reader will be distracted by the readable content
                        of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose
                        (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum
                        is
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        it
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going
                        through the cites of the word in classical literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of
                        Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very
                        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes
                        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form, accompanied by English versions from
                        the
                        1914 translation by H. Rackham. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including
                        versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English. Many desktop publishing packages and
                        web
                        page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                        will
                        uncover many web sites still in their infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come
                        from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33
                        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This
                        book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                        of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard
                        chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by H. Rackham. Lorem
                        Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It
                        is
                        a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose
                        (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum
                        is
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        it
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going
                        through the cites of the word in classical literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of
                        Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very
                        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes
                        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form, accompanied by English versions from
                        the
                        1914 translation by H. Rackham. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including
                        versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English. Many desktop publishing packages and
                        web
                        page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                        will
                        uncover many web sites still in their infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come
                        from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33
                        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This
                        book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                        of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard
                        chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by H. Rackham. Lorem
                        Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It
                        is
                        a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose
                        (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum
                        is
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        it
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going
                        through the cites of the word in classical literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of
                        Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very
                        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes
                        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form, accompanied by English versions from
                        the
                        1914 translation by H. Rackham. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including
                        versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English. Many desktop publishing packages and
                        web
                        page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                        will
                        uncover many web sites still in their infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come
                        from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33
                        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This
                        book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                        of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard
                        chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by H. Rackham. Lorem
                        Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It
                        is
                        a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose
                        (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum
                        is
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        it
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going
                        through the cites of the word in classical literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of
                        Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very
                        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes
                        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form, accompanied by English versions from
                        the
                        1914 translation by H. Rackham. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including
                        versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English. Many desktop publishing packages and
                        web
                        page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                        will
                        uncover many web sites still in their infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come
                        from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33
                        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This
                        book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                        of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard
                        chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by H. Rackham. Lorem
                        Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It
                        is
                        a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose
                        (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum
                        is
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        it
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going
                        through the cites of the word in classical literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of
                        Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very
                        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes
                        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form, accompanied by English versions from
                        the
                        1914 translation by H. Rackham.
                        <h6>the end</h6>
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;