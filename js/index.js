
const tags_data = [
    {title: '第一', checked: true, 
        children: [
            {cnt: '这里是测试内容'},
            {cnt: ''},
        ]},
    {title: '第二', checked: false, children: []},
    {title: '第三', checked: false, children: []},
    {title: '第四', checked: false, children: []},
    {title: '第五', checked: false, children: []},
];

const category  = document.querySelector('.category');
const items     = document.querySelector('.items');
const listcnt   = document.querySelector('.listcnt');

function init_page() {
    create_categorys(tags_data)
}

function create_categorys(tags_data) {
    tags_data.forEach((element, index) => {

        var li = document.createElement("li");
        if(element.checked) {
            li.className = 'tag active';
        } else {
            li.className = 'tag'
        }
        li.innerHTML = element.title;
        li.setAttribute('data-id','index_' + (index+1));
        category.appendChild(li);

        // 添加内容项的ul>li
        var ul = document.createElement("ul");
        if(element.checked) {
            ul.className = 'items active';
        } else {
            ul.className = 'items'
        }
        
        // 己经保存过的内容项li
        if(element.children.length>0) {
            element.children.forEach(childli=>{
                var childli_item = document.createElement("li");
                childli_item.className = 'item'
                childli_item.innerHTML = `<div name="" class="recode" contenteditable="true">${childli.cnt}</div>`
                ul.appendChild(childli_item);
            })
        } else {
            for(var i=1; i<=12; i++) {
                var childli_item = document.createElement("li");
                childli_item.className = 'item'
                childli_item.innerHTML = `<div name="" class="recode" contenteditable="true"></div>`
                ul.appendChild(childli_item);
            }
        }
        listcnt.appendChild(ul);
    });

    var addli = document.createElement("li");
    addli.className = 'last';
    addli.innerHTML = '+';
    category.appendChild(addli);
}
// 开始初始化
init_page();

const cnts  = document.querySelectorAll('.listcnt .items .item .recode');

cnts.forEach(cntitem => {
    cntitem.addEventListener('input', updateValue);
})


function updateValue(e) {
    console.log(e); //e.srcElement.innerHTML
}