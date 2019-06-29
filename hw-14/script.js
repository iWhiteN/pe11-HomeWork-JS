const $tabs = $(".tabs-title");

let $activeItem = $('.active'),
    $activeContent = $('.active-content');

$tabs.click("click", e => {
    // Добавление активности табу
    $activeItem.toggleClass('active');
    $(e.currentTarget).toggleClass('active');
    $activeItem = $(e.currentTarget);

    // Отображение текста по табу
    $activeContent.toggleClass('active-content');
    let $targetContent = $(`.tabs-content-item[data-name="${$activeItem.data("name")}"]`);
    $targetContent.toggleClass('active-content');
    $activeContent = $targetContent;
})