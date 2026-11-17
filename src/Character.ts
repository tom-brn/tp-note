import {Weapon} from './Weapon';

export abstract class Character {

    public readonly name : string;
    public readonly maxHealth : number;
    public readonly baseAttack : number;
    public readonly baseDefense : number;
    private _health : number;
    private _weapon : Weapon | null 

    public constructor(name: string, health: number, baseAttack: number, baseDefense: number) {
        this.name = name;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
        this.maxHealth = health;
        this._health = health;

        if (health <= 0) {
            throw new Error(`The health of ${this.name} must be strictly positive.`);
        }

    }

    public get health(): number {
        return this._health;
    }

    public abstract getAttack(): number;

    public abstract canEquip(weapon: Weapon): boolean;

    protected getWeaponAttackBonus(): number {
        return this.baseAttack + this._weapon.attackBonus;
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public describe(): string {
        return ` ${this.name} - health ${this.health}/${this.maxHealth} - attack ${this.baseAttack} - defense ${this.baseDefense} - weapon: ${Weapon ? this._weapon.name : null}.`
    }

    public equip(weapon: Weapon): void {
        if ( this._weapon.kind) {
            throw new Error(`${this.name} cannot equip ${this._weapon.name}.`)
        }
        else {
            this._weapon = weapon;
        }
    }

    public takeDamage(amount: number): void {
        this._health = Math.max(0, this.health - amount);
    }

    public heal(amount: number): void {
        this._health = Math.min(this.health + amount, this.maxHealth);
    }

    protected computeDamage(target: Character): number {

        return
    }

    public attack(target: Character): number {

        return
    }





}