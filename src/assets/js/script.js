
//LocalStorage
let modelsStorage = window.localStorage.getItem('models');
let models = [
    {
        url: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg',
        title: 'Anna Anninogenova',
        description: "Ukranian, Kiev"
    },
    {
        url: 'https://i.pinimg.com/736x/01/27/54/0127541b2787f5daa5b4eb6ab8b96fb5.jpg',
        title: 'Inna Kuznetsova',
        description: 'Russia, San Petersburg'
    },
    {
        url: 'https://i.pinimg.com/1200x/cd/90/d9/cd90d9de63fa2c8e5c5e7117e27b5c18.jpg',
        title: 'Catalina Madrid',
        description: 'España, Granada'
    },
    {
        url: 'https://i.pinimg.com/originals/0a/1e/be/0a1ebe78c71a1d0a423f5a92fd0dd0da.jpg',
        title: 'Grishia Mahabarata',
        description: 'Singapure '
    },
    {
        url: 'https://i.pinimg.com/550x/f5/a0/62/f5a0626a80fe6026c0ac65cdc2d8ede2.jpg',
        title: "Jennie O'Brian ",
        description: 'Australia, Melbore'
    },
    {
        url: 'https://i.pinimg.com/564x/15/3c/21/153c21116551e420e954ea8f82dde7fe--black-portrait-side-portrait.jpg',
        title: 'Sofía Dos Santos',
        description: 'Portugal, Lisboa'
    },
    {
        url: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/de1f04b6928e50e2f8c746400d2999ed/99561b8e485129d8ffcde2d1_rw_1200.jpg?h=8e8f2fd0172d68b54e92ae8b512ba026',
        title: 'Anna Dyszkiewicz',
        description: 'Bielorrusia, Minsk'
    }
]



if (modelsStorage != null) {
    models = JSON.parse(modelsStorage);
} else {
    if (models.length == 0) {
        document.querySelector('.portrait').style.display = 'none';
        document.querySelector('.paging').style.display = 'none';
    }
}
portraitsImg(models);

//Form
formModels();

//Pagination
createPagination();

//Models set
function portraitsImg(modelsPage) {
    let template_registro;

    switch (modelsPage.length) {
        case 1:
            template_registro = template1(modelsPage);
            break;
        case 2:
            template_registro = template2(modelsPage);
            break;
        case 3:
            template_registro = template3(modelsPage);
            break;
        case 4:
            template_registro = template4(modelsPage);
            break;
        case 5:
            template_registro = template5(modelsPage);
            break;
        case 6:
            template_registro = template6(modelsPage);
            break;
        default:
            template_registro = template6(modelsPage);
            break;

    }

    let portrait = document.querySelector('.portrait');

    portrait.innerHTML = template_registro;

    let portraits = document.querySelectorAll('.container-portrait');
    let overlay = document.querySelectorAll('.overlayes');
    let img = document.querySelectorAll('img');


    for (let i = 0; i < portraits.length; i++) {

        portraits[i].addEventListener('mouseenter', () => {
            overlay[i].style.opacity = 1;
            img[i].style.filter = 'blur(2px)';
        })

        portraits[i].addEventListener('mouseout', () => {
            overlay[i].style.opacity = 0;
            img[i].style.filter = 'none';
        })

        overlay[i].addEventListener('mouseenter', () => {
            overlay[i].style.opacity = 1;
            img[i].style.filter = 'blur(2px)';
        })

        overlay[i].addEventListener('mouseout', () => {
            overlay[i].style.opacity = 1;
            img[i].style.filter = 'blur(2px) !important';
        })
    }

}

function template1(models) {
    return `
            <div class="flex flex-row">
                <div class="container-portrait ">
                    <img src="${models[0].url}">
                    <div class="overlayes">
                        <h2 class="text-3xl text-black">${models[0].title}</h2>
                        <p>${models[0].description}</p>
                    </div>
                </div>
            </div>
    `;
}

function template2(models) {
    return `
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[0].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[0].title}</h2>
                <p>${models[0].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait">
            <img src="${models[1].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[1].title}</h2>
                <p>${models[1].description}</p>
            </div>
        </div>
    </div>
    `;
}

function template3(models) {
    return `
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[0].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[0].title}</h2>
                <p>${models[0].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait">
            <img src="${models[1].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[1].title}</h2>
                <p>${models[1].description}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class=" container-portrait ">
            <img src="${models[2].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[2].title}</h2>
                <p>${models[2].description}</p>
            </div>
        </div>
    </div>
    `;
}

function template4(models) {
    return `
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[0].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[0].title}</h2>
                <p>${models[0].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait">
            <img src="${models[1].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[1].title}</h2>
                <p>${models[1].description}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[2].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[2].title}</h2>
                <p>${models[2].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait ">
            <img src="${models[3].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[3].title}</h2>
                <p>${models[3].description}</p>
            </div>
        </div>
    </div>
    `;
}

function template5(models) {
    return `
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[0].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[0].title}</h2>
                <p>${models[0].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait">
            <img src="${models[1].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[1].title}</h2>
                <p>${models[1].description}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[2].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[2].title}</h2>
                <p>${models[2].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait ">
            <img src="${models[3].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[3].title}</h2>
                <p>${models[3].description}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="container-portrait ">
            <img src="${models[4].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[4].title}</h2>
                <p>${models[4].description}</p>
            </div>
        </div>
    </div>
    `;
}

function template6(models) {
    return `
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src=${models[0].url}>
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[0].title}</h2>
                <p>${models[0].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait">
            <img src="${models[1].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[1].title}</h2>
                <p>${models[1].description}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[2].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[2].title}</h2>
                <p>${models[2].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait ">
            <img src="${models[3].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[3].title}</h2>
                <p>${models[3].description}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="basis-1/2 container-portrait ">
            <img src="${models[4].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[4].title}</h2>
                <p>${models[4].description}</p>
            </div>
        </div>
        <div class="basis-1/2 container-portrait ">
            <img src="${models[5].url}">
            <div class="overlayes">
                <h2 class="text-3xl text-black">${models[5].title}</h2>
                <p>${models[5].description}</p>
            </div>
        </div>
    </div>
    `;
}

function active() {
    let numbers = document.querySelector('.numbers');

    for (let i = 0; i < numbers.children.length; i++) {
        numbers.children[i].style.borderColor = '#D1D5DB';
        numbers.children[i].style.color = '#6B7280';
        numbers.children[i].style.background = 'white';
    }

}

function getModelsPages() {
    let modelPages = [];
    let model = [];
    let count = 0;

    for (let i = 0; i < models.length; i++) {

        model.push(models[i]);
        count++;
        if (count == 6 || i == models.length - 1) {
            count = 0;
            modelPages.push(model);
            model = [];
        }

    }

    return modelPages;

}

function formModels() {
    document.querySelectorAll('#submit')[0].addEventListener('click', () => {
        let inputs = document.querySelectorAll('input');
        let textarea = document.querySelectorAll('textarea');

        //Title
        if (inputs[0].value.trim() == "") {
            inputs[0].style.borderColor = 'red';
            document.getElementById('title_error').style.display = 'block';
            return;
        } else {
            inputs[0].style.borderColor = 'black';
            document.getElementById('title_error').style.display = 'none';
        }

        //URL
        if (inputs[1].value.trim() == "") {
            if (document.getElementById("fileupload").files.length === 0) {
                inputs[1].style.borderColor = 'red';
                document.getElementById('url_error').style.display = 'block';
                return;
            } else {
                //Upload File
                inputs[1].value = uploadFile();
                document.getElementById("fileupload").value = '';
            }
        } else {
            inputs[1].style.borderColor = 'black';
            document.getElementById('url_error').style.display = 'none';
        }
        debugger;
        let title = inputs[0].value.trim();
        let description = textarea[0].value.trim();
        let url = inputs[1].value.trim();


        model = {
            url: url,
            title: title,
            description: description
        }

        models.unshift(model);
        window.localStorage.setItem('models', JSON.stringify(models));

        inputs[0].value = '';
        textarea[0].value = '';
        inputs[1].value = '';

        location.reload();
    });
}


function createPagination() {
    let pagination = document.querySelector('.numbers');
    let pages = Math.ceil(models.length / 6);
    let template = '';
    let currentPage = 1;

    //Creation of pages
    for (let i = 0; i < pages; i++) {
        if (i == 0) {
            template = template + `
        <a href="#" aria-current="page"
        class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
        1 </a>
        `
        } else {
            template = template + `
            <a href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            ${i + 1} </a>
        `;
        }
    }

    pagination.innerHTML = template;


    //Click Number
    let numbers = document.querySelector('.numbers');

    for (let i = 0; i < numbers.children.length; i++) {
        let page = numbers.children[i];

        page.addEventListener('click', () => {
            currentPage = i + 1;
            active();
            page.style.borderColor = '#6366F1';
            page.style.color = '#6366F1';
            page.style.background = '#EEF2FF';

            modelsPage = getModelsPages();
            portraitsImg(modelsPage[parseInt(page.innerText) - 1])

        })
    }


    //Next
    next = document.querySelectorAll('.next');
    for (let i = 0; i < next.length; i++) {
        const element = next[i];

        element.addEventListener('click', () => {

            if (pages >= currentPage + 1) {

                active();
                let page = document.querySelector('.numbers').children[currentPage];

                page.style.borderColor = '#6366F1';
                page.style.color = '#6366F1';
                page.style.background = '#EEF2FF';

                modelsPage = getModelsPages();
                portraitsImg(modelsPage[parseInt(page.innerText) - 1]);
                currentPage = currentPage + 1;
            }

        });
    }


    //Back
    back = document.querySelectorAll('.back');
    for (let i = 0; i < back.length; i++) {
        let element = back[i];

        element.addEventListener('click', () => {

            if (currentPage - 1 > 0) {

                currentPage = currentPage - 1;
                active();
                let page = document.querySelector('.numbers').children[currentPage - 1];

                page.style.borderColor = '#6366F1';
                page.style.color = '#6366F1';
                page.style.background = '#EEF2FF';

                modelsPage = getModelsPages();
                portraitsImg(modelsPage[parseInt(page.innerText) - 1])

            }

        });
    }
}

function canvasSOPTest(url) {
    // Same Origin Policy check
    img.onload = function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        console.log('Painting image...');
        ctx.drawImage(img, 0, 0);
        console.log('Attempting to get image data');
        try {
            ctx.getImageData(0, 0, canvas.width, canvas.height);
            console.log('Success! No errors');
        } catch (e) {
            console.log(e);
        }
    };
    return url;
}

function uploadFile() {
    return window.URL.createObjectURL(fileupload.files[0]);
}

document.querySelector(["input[type=file"]).addEventListener('mouseenter', () => {

    if(document.querySelector("input[type=file").files.length > 0){
        document.querySelector(".num").innerHTML(`<p style="font-family: arial;"> ${document.querySelector("input[type=file").files.length} Archivos </p>`);
    }

});