export class McmmoPlayer {

    constructor(obj: any) {
        this.id = obj.id ?? "";
        this.name = obj.name ?? "";
        this.mining = obj.mining ?? 0;
        this.woodcutting = obj.woodcutting ?? 0;
        this.herbalism = obj.herbalism ?? 0;
        this.excavation = obj.excavation ?? 0;
        this.fishing = obj.fishing ?? 0;
        this.unarmed = obj.unarmed ?? 0;
        this.archery = obj.archery ?? 0;
        this.swords = obj.swords ?? 0;
        this.axes = obj.axes ?? 0;
        this.taming = obj.taming ?? 0;
        this.repair = obj.repair ?? 0;
        this.acrobatics = obj.acrobatics ?? 0;
        this.alchemy = obj.alchemy ?? 0;
    }

    public id!: string;
    public name!: string;

    public mining!: number;
    public woodcutting!: number;
    public herbalism!: number;
    public excavation!: number;
    public fishing!: number;

    public unarmed!: number;
    public archery!: number;
    public swords!: number;
    public axes!: number;
    public taming!: number;

    public repair!: number;
    public acrobatics!: number;
    public alchemy!: number;
    public get salvage(): number {
        return Math.floor((this.repair + this.fishing) / 2);
    }
    public get smelting(): number {
        return Math.floor((this.repair + this.mining) / 2);
    }

    public get totalPowerLevel(): number {
        return this.mining +
            this.woodcutting +
            this.herbalism +
            this.excavation +
            this.fishing +
            this.unarmed +
            this.archery +
            this.swords +
            this.axes +
            this.taming +
            this.repair +
            this.acrobatics +
            this.alchemy;
    }

}