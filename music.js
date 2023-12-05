class Music{
    constructor(title,singer,img,file){
        this.title=title
        this.singer=singer
        this.img=img
        this.file=file
    }

    getName(){
        return this.title+"-"+this.singer
    }


}

const musicList=[
    new Music('Karlar','Ados','1.jpg','1.mp3'),
    new Music('Ay Yuzlum','Murat Gogebakan','2.jpg','2.mp3'),
    new Music('Bosu Bosuna','Oguzhan Ozel','3.jpg','3.mp3'),
]