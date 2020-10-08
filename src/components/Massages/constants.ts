import { MassageList } from "./Massages";

export const massagesData: MassageList = {
  japanese: {
    title: "Японский",
    shortDescription: "Юмейхо терапия 1 ступень (японская техника массажа) ",
    description:
      "Юмейхо терапия 1 ступень (японская техника массажа) Построена на основе биомеханики тела и влиянии смещения центра тяжести костей таза, на здоровье человека. Юмейхо терапия включает в себя лимфатический массаж всего тела, мягкую мануальную терапию и проработку мышц всего тела.",
    images: [
      require("./media/japanese(1).jpg"),
      require("./media/japanese(2).png"),
      require("./media/japanese(3).jpg"),
      require("./media/japanese(4).jpg"),
    ],
  },
  vietnamese: {
    title: "Вьетнамский",
    shortDescription: "Юмейхо терапия 2 ступень (вьетнамская техника массажа)",
    description:
      "Юмейхо терапия 2 ступень (вьетнамская техника массажа) Это система специально подобранных приемов обдавливания, скруток и растяжек (основанных на приемах боевых искусств), направленных на глубокую проработку мышц и связок, снятия напряжения со всего тела и увеличения объема движения суставов.",
    images: [
      require("./media/vietnamese(1).jpg"),
      require("./media/vietnamese(2).jpg"),
      require("./media/vietnamese(3).jpg"),
      // require("./media/vietnamese(4).jpg"),
      // require("./media/vietnamese(5).jpg"),
    ],
    // or image: "url"
  },
  relaxing: {
    title: "Расслабляющий",
    shortDescription: "Массаж шейно-воротниковой зоны",
    description:
      "Массаж шейно-воротниковой зоны.  Включает в себя проработку шеи, грудного отдела и плечевого пояса. 1. Расслабляет мышцы шейно-воротниковой зоны 2. Улучшает кровообращение и обмен веществ в шейном отделе. 3. Ускоряет отток лимфы.  4. Улучшает кровоснабжение головного мозга.  5. Убирает боли в зоне головы, шеи и спины.  6. Устраняет перенапряжение и скованность в мышцах.  7. Нормализуется сон.  8. Улучшается работа нервной системы",
    images: [
      require("./media/relaxing(1).jpg"),
      require("./media/relaxing(2).jpg"),
      require("./media/relaxing(3).jpg"),
      require("./media/relaxing(4).jpg"),
    ],
  },
  visceral: {
    title: "Массаж живота",
    shortDescription: "Висцеральная хиропрактика(массаж живота)",
    description:
      "Висцеральная хиропрактика (массаж живота) Это техника воздействия руками на внутренние органы посредством надавливания, простукивания, сдвижения, массажа, с целью восстановления правильного положения органов и микроциркуляции вокруг них. Помогает справляться с широким спектром ослабления функций органов всего тела.",
    images: [
      require("./media/visceral(1).jpg"),
      require("./media/visceral(2).jpg"),
      require("./media/visceral(3).jpg"),
      require("./media/visceral(4).jpg"),
    ],
  },
};