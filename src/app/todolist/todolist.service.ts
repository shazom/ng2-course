import {StorageService} from "../utils/storage.service";
import {Injectable} from "@angular/core";
export class Item {
  title: string;
  done: boolean;
  created: Date;

  constructor(title: string) {
    this.title = title;
    this.done = false;
    this.created = new Date();
  }
}

@Injectable()
export class Todolist {
  private _items:Item[];
  private storage: StorageService;
  private _KEY = "LIST";

  constructor(storage : StorageService, key:string) {
    this.storage    = storage;
    // this.KEY        = key;
    this.KEY        = "LISTS";
    this._items     = this.storage.get(this._KEY) || [];

    // this._items = [];
  }

  public addItem (title : string) : void {
    this._items=[...this._items, new Item(title)];
    this.storage.save (this._KEY, this._items);
    //this._items.push(new Item (title));
  }

  public removeItem (item : Item) : void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  get items(): Item[] {
    return this._items;
  }

  public removeDone() : any {
    this._items = this._items.filter( item => item.done === false);
  }

  public toggle(flag : boolean) : any {
    console.log(flag);
    console.log ("to be defined!");
  }

  set KEY(value: string) {
    this._KEY = value;
  }
}
