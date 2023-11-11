export default class Tour {

    public _title:string
    public _company:string
    public _description:string
    public _contact:string
    public _img:any
    public _img_id:any
    public _user_id:any

    constructor(title:string, company:string, description:string, contact:string, img:any, img_id:number) {
        this._title = title
        this._company = company
        this._description = description
        this._contact = contact
        this._img = img
        this._img_id = img_id
    }

}