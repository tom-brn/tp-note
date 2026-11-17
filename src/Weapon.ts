export type WeaponKind = 'sword' | 'axe' | 'staff' | 'dagger';

export class Weapon {

    public readonly name : string;
    public readonly kind : WeaponKind;
    public readonly attackBonus : number;

    public constructor(name: string, kind: WeaponKind, attackBonus: number){
        this.name = name;
        this.kind = kind;
        if (attackBonus < 0) {
            throw new Error(`The attack bonus of ${this.name} cannot be negative.`);
        }
        else {
            this.attackBonus = attackBonus;
        }
        
    }

    public describe(): string{
        return `${this.name} (${this.kind}, +${this.attackBonus} attack)`
    }



}