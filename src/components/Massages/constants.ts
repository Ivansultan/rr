import { MassageList } from "./Massages";

export const massagesData: MassageList = {
  japanese: {
    title: "Японский",
    description:
      "Юмейхо терапия 1 ступень (японская техника массажа) Построена на основе биомеханики тела и влиянии смещения центра тяжести костей таза, на здоровье человека. Юмейхо терапия включает в себя лимфатический массаж всего тела, мягкую мануальную терапию и проработку мышц всего тела.",
    images: [
      require("./media/japanese (1).png"),
      require("./media/japanese (2).jpg"),
      require("./media/japanese (3).jpg"),
      require("./media/japanese (4).jpg"),
    ],
  },
  vietnamese: {
    title: "Вьетнамский",
    description:
      "Юмейхо терапия 2 ступень (вьетнамская техника массажа) Это система специально подобранных приемов обдавливания, скруток и растяжек (основанных на приемах боевых искусств), направленных на глубокую проработку мышц и связок, снятия напряжения со всего тела и увеличения объема движения суставов.",
    images: [
      require("./media/vietnamese (1).jpg"),
      require("./media/vietnamese (2).jpg"),
      require("./media/vietnamese (3).jpg"),
      require("./media/vietnamese (4).jpg"),
      require("./media/vietnamese (5).jpg"),
    ],
    // or image: "url"
  },
  relaxing: {
    title: "Расслабляющий",
    description: "",
    images: [
      require("./media/relaxing (1).jpg"),
      require("./media/relaxing (2).jpg"),
      require("./media/relaxing (3).jpg"),
      require("./media/relaxing (4).jpg"),
    ],
  },
  visceral: {
    title: "Массаж живота",
    description:
      "Висцеральная хиропрактика(массаж живота)Это техника воздействия руками на внутренние органы посредством надавливания, простукивания, сдвижения, массажа, с целью восстановления правильного положения органов и микроциркуляции вокруг них.Помогает справляться с широким спектром ослабления функций органов всего тела.   Массаж живота устраняет: 1. Дисфункции работы желудочно-кишечного тракта 2. Патологии работы почек 3. Нарушение работы половой системы у мужчин и женщин 4. Плохая циркуляция крови 5. Недуги органов дыхания 6. Воспаление поджелудочной железы, ослабление работы печени и желчного пузыря.  Улучшает: 1. Работу сердечно-сосудистой системы 2. Метаболизм 3. Корректирует избыточный вес 4. Психоэмоциональное состояние 5. Профилактика простудных заболеваний и стимуляция иммунной системы.",
    images: [
      require("./media/visceral (1).jpg"),
      require("./media/visceral (2).jpg"),
      require("./media/visceral (3).jpg"),
      require("./media/visceral (4).jpg"),
    ],
  },
};
