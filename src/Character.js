export default class Character {
  constructor(name, type) {
    if ((name.length < 2) || (name.length > 10 || typeof (name) !== 'string')) {
      throw new Error('Ошибка в name');
    } else {
      this.name = name;
    }
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Ошибка в type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить уровень умершего');
    } else {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('нельзя нанести урон умершему');
    }
  }
}
