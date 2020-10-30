
let Ltitle = '';
let Lcontent = '';

//Get date for list.
let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

document.getElementById("add").addEventListener("click", function () {
    Ltitle = document.getElementById('title').value;
    Lcontent = document.getElementById('content').value;

    if (Lcontent == "" || Ltitle == "") return;
    let divToAdd = `<div class="col-sm-6 col-md-4 col-lg-3 col-xs-12 my-1">
                        <div class="card ">
                            <button id='delete' onclick='deleteDiv(this)' class="btn float-right bg-danger">
                                    <strong> X </strong>
                            </button>
                            <div class="card-header">
                                <h5 class="d-inline float -left">${Ltitle}</h5>
                            </div>
                        
                            <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${Lcontent}</p>
                                <footer class="blockquote-footer float-right">${date}/${month}/${year} <cite title="Source Title"></cite></footer>
                            </blockquote>
                            </div>
                        </div>
                    </div>`;

    document.getElementById('my-lists').innerHTML += divToAdd;
    // document.getElementById('done-msg').fadeIn("slow");
    // document.getElementById('done-msg').addEventListener('click',function(){
    //     document.getElementById('done-msg').classList.('fade');
    // });
    document.getElementById('title').value = "";
    document.getElementById('content').value = "";

});

function deleteDiv(del){
    del.parentNode.parentNode.remove();
};



