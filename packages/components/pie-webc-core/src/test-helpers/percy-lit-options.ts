///*
///* This code snippet was provided by Percy as a way to get our Lit components working correctly when running against the Safari browser.
///* Safari blocks requests coming from localhost, resulting in our CSS not loading when requested.
///* This function is passed to Percy and executed against the serialised DOM to rewrite all 'localhost' urls to 'render.percy.local'.
///* This is a temporary workaround, and a long-term solution will be implemented by Percy at a later date.
///*
const percyOptions = {
    domTransformation: (documentElement: any) => {
        function updateLinks(root : any) {
        root.querySelectorAll('[data-percy-adopted-stylesheets-serialized]').forEach((link : any) => {
            console.log(link);
            let href = link.getAttribute('data-percy-serialized-attribute-href');
            href = href.replace(/localhost[:\d+]*/, 'render.percy.local');
            link.setAttribute('data-percy-serialized-attribute-href', href);
        });

        root.querySelectorAll('[data-percy-shadow-host]')
            .forEach((shadowHost : any) => {
                console.log(shadowHost);
                if (shadowHost?.shadowRoot)
                updateLinks(shadowHost.shadowRoot);
            }
        );
        }
        updateLinks(documentElement);
    }
}

const getLitPercyOptions = () => {
    const options = {
        domTransformation: percyOptions.domTransformation.toString()
    }

    return options;
}

export { getLitPercyOptions }