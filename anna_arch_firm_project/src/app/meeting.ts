export class Meeting {

    constructor(
        //access modifier             //nameOfField                  //dataType
        public                        c_id                         : number,
        public date: Date,
        public s_time: Date,
        public e_time: Date,    
        public location: string,
        public subject: string,
        public description: string,
        public m_id: number
        
    ){}


}
