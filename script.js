function changeEra(eraId) {
    // 1. Бардык текст блокторун жашыруу
    const eras = document.querySelectorAll('.era-content');
    eras.forEach(era => {
        era.classList.remove('active-era');
    });

    // 2. Бардык баскычтардын активдүү стилин алып салуу
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Тандалган доорду көрсөтүү
    document.getElementById(eraId).classList.add('active-era');

    // 4. Басылган баскычты активдүү (алтын түс) кылуу
    // Бул жерде кайсы баскыч басылганын аныктап, ага 'active' класын кошобуз
    event.currentTarget.classList.add('active');
}