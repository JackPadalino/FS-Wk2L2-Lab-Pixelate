const table=document.getElementById('table');
const select=document.getElementById('select');
const addRowButton=document.getElementById('add-row');
const resetButton=document.getElementById('reset');
const bucketButton=document.getElementById('bucket');
const deleteButton=document.getElementById('delete-board');
const startButton=document.getElementById('start-drawing');
const startMenu=document.getElementById('start-menu');
const mainBoard=document.getElementById('main-board');

let chosenColor='';

mainBoard.style.display='none';

const makeRows=()=>{
    for(let a=0;a<10;a++){
        const newRow = document.createElement('tr')
        for(let i=0;i<50;i++){
            const newPixel=document.createElement('td');
            newPixel.className='light-gray';
            newRow.appendChild(newPixel);
        };
        table.appendChild(newRow);
    };
};

const colorize=(event)=>{
    const target=event.target;
    if(target.tagName==='TD'){
        target.className=chosenColor;
    };
    table.addEventListener('mouseover',colorize);
};

// add ten rows of 100 tiles
addRowButton.addEventListener('click',makeRows);

// selecting a color from the menu
select.addEventListener('change',(event)=>{
    chosenColor=event.target.value;
});

// click and drag to paint
table.addEventListener("mousedown", colorize);
table.addEventListener("mouseup", () =>
  table.removeEventListener("mouseover", colorize)
  );

// fill all non-colored tiles with selected color
bucketButton.addEventListener('click',function(){
    const tiles=[...document.getElementsByTagName('td')];
    tiles.forEach(tile=>{
        if(tile.className==='light-gray'){
            tile.className=chosenColor;
        };
    });
}); 

// reset all tiles
resetButton.addEventListener('click',function(){
    const tiles=[...document.getElementsByTagName('td')];
    tiles.forEach(tile=>{
        tile.className='light-gray';
    });
});


// delete board
deleteButton.addEventListener('click',function(){
    while(table.firstChild){
        table.removeChild(table.firstChild);
    };
});

// show/hide divs
startButton.addEventListener('click',function(){
    startMenu.style.display='none';
    mainBoard.style.display='block';
});





//~~~~~program with JQuery~~~~~//
/*
const table=$('#table');
const select=$('#select');
const addRowButton=$('#add-row');
const resetButton=$('#reset');
const bucketButton=document.getElementById('bucket');
const startButton=$('#start-drawing');
const startMenu=$('#start-menu');
const mainBoard=$('#main-board');
const deleteButton=$('#delete-board');

let chosenColor='';
let mouseIsDown=false;

mainBoard.hide();

const makeRows=()=>{
    for(let a=0;a<10;a++){
        const newRow = $('<tr>');
        for(let i=0;i<50;i++){
            const newPixel=$('<td>');
            newPixel.className='light-gray';
            newRow.append(newPixel);
        };
        table.append(newRow);
    };  
};

const colorize=(event)=>{
    const target=event.target;
    console.log(event);
    if(target.tagName==='TD' && mouseIsDown){
        target.className=chosenColor;
    };
};

// add ten rows of 100 tiles
addRowButton.click(makeRows);

select.change((event)=>{
    chosenColor=event.target.value;
})

// click and drag to paint
table.mousedown(()=>{mouseIsDown=true});
table.mouseup(()=>{mouseIsDown=false});
table.mouseover(colorize);

// fill all non-colored tiles with selected color
bucketButton.addEventListener('click',function(){
    const tiles=[...document.getElementsByTagName('td')];
    tiles.forEach(tile=>{
        if(tile.className==='light-gray'){
            tile.className=chosenColor;
        };
    });
}); 

// reset all tiles
//resetButton.addEventListener('click',function(){
//    const tiles=[...document.getElementsByTagName('td')];
//    tiles.forEach(tile=>{
//        tile.className='light-gray';
//    });
//});

resetButton.click(function(){
    const tiles=[...$('td')];
    tiles.forEach(tile=>{
        tile.className='light-gray';
    });
});

// delete board
deleteButton.click(function(){
    table.empty();
});

// show/hide divs
startButton.click(function(){
    startMenu.hide();
    mainBoard.show();
});
*/