
const allshows = [

    {
        id:1,
        name : 'Mare Of Easttown',
        image : 'https://m.media-amazon.com/images/M/MV5BYjIyOGU1NzAtODZmYi00NGMzLWJiMjItNGNjNTFjOTM5ZDJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt10155688/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id : 2,
        name : 'Lucifer',
        image : 'https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt4052886/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :3 ,
        name : 'Startup',
        image: 'https://m.media-amazon.com/images/M/MV5BMTAxNTIwNzE5MTJeQTJeQWpwZ15BbWU4MDE2NDQ2MTMy._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5028002/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id : 4,
        name : 'Ozark',
        image: 'https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5071412/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :5 ,
        name : 'Peaky Blinders',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2442560/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :6 ,
        name : 'Breaking Bad',
        image: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0903747/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :7 ,
        name : 'The Boys',
        image: 'https://www.imdb.com/title/tt0903747/?ref_=adv_li_tt',
        imdblink : 'https://www.imdb.com/title/tt1190634/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :8 ,
        name : 'Money Heist',
        image: 'https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt6468322/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :9 ,
        name : 'Fargo',
        image: 'https://m.media-amazon.com/images/M/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2802850/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id : 10,
        name : 'Better Call Saul',
        image: 'https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3032476/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id :11 ,
        name : "Handmaid's Tale",
        image: 'https://m.media-amazon.com/images/M/MV5BZGZiMTkzZjktNzk0OC00NzEzLWJjOTMtYjdkMWM1NGU1ZDM4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5834204/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id : 12,
        name : 'Invincible',
        image: 'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt6741278/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id :13 ,
        name : 'The Walking Dead',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1520211/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id : 14,
        name : 'Breaking Bad',
        image: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0903747/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id :15 ,
        name : 'Stranger Things',
        image: 'https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4574334/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 16,
        name : 'Panic',
        image:'https://m.media-amazon.com/images/M/MV5BODlhZjI4OTgtNzJmNS00NzBiLWE5ZWYtOTkxMGI1OTA5MzA4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt10344410/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 17,
        name : 'Ragnarok',
        image:'https://m.media-amazon.com/images/M/MV5BODM3NTZkZTUtYzEyYS00NjEyLTg2NjEtNDhlMjYwY2ZkNGUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9251798/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 18,
        name : 'StartUp',
        image:'https://m.media-amazon.com/images/M/MV5BMTAxNTIwNzE5MTJeQTJeQWpwZ15BbWU4MDE2NDQ2MTMy._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2741602/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id:19 ,
        name : 'Law and Order',
        image:'https://m.media-amazon.com/images/M/MV5BNWNlNjcwNGItOWRkNi00MzI0LTg3OGMtYzdjZDA4YmU4M2U1XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0203259/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 20,
        name : 'The Nervers',
        image:'https://m.media-amazon.com/images/M/MV5BODEyOWY2ZDctOGI3Zi00YjYwLWIwZDEtMzJlY2VhYTA2N2ViXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt8697870/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 21,
        name : 'Lines Of Duty',
        image:'https://m.media-amazon.com/images/M/MV5BMTExZDZjNTMtNDVmNy00ZTk2LWFiMzUtZDlkZGRlOGU0ZWRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2303687/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 22,
        name : 'The Dexter',
        image:'https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0773262/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 23,
        name : 'Who Killed SARA ?',
        image:'https://m.media-amazon.com/images/M/MV5BYWZlOTM3ZjAtZDlkOC00ZjRlLWI0YTEtYTk0NzFjMWEzMDczXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt11937816/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 24,
        name : 'Ozark',
        image:'https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt5071412/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 25,
        name : 'The WIRE',
        image:'https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0306414/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 26,
        name : 'Sons Of Anarchy',
        image:'https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1124373/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 27,
        name : 'True Detective',
        image:'https://m.media-amazon.com/images/M/MV5BMTUwMGM2ZmYtZGEyZC00OWQyLWI2Y2QtMTdjYzMxZGJmNjhjXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2356777/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 28,
        name : 'Bosch',
        image:'https://m.media-amazon.com/images/M/MV5BZDBiYjg4OTgtZDg2YS00ZGIzLTk3ZWMtZWRlZDQ5M2I0MDNhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt3502248/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 29,
        name : 'The X-Files',
        image:'https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0106179/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 30,
        name : 'Mr InBetween',
        image:'https://m.media-amazon.com/images/M/MV5BNWU4MTA0ZTItZmUyYi00ZGY3LWE2NTYtMDQ3N2RkZjcwYjk4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt7472896/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id:31 ,
        name : 'Criminal Minds',
        image:'https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'thriller'
    },
    {
        id: 32,
        name : 'SuperNatural',
        image:'https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0460681/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 33,
        name : 'Black Mirror',
        image:'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2085059/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 34,
        name : 'Lost',
        image:'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0411008/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 35,
        name : 'Vampire Diaries',
        image:'https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1405406/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 36,
        name : 'Sons Of Anarchy',
        image:'https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1124373/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 37,
        name : 'The Expanse',
        image:'https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt3230854/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 38,
        name : 'Dark',
        image:'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt5753856/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 39,
        name : 'Chernobyl',
        image:'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt7366338/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 40,
        name : 'Sherlock',
        image:'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1475582/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 41,
        name : 'The Kominsky Method',
        image:'https://m.media-amazon.com/images/M/MV5BMzA0YTNjOTAtNmVkZi00YjBkLTgyZDItOTFmMzQ0N2E4ZDNiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt7255502/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 42 ,
        name : 'F.R.I.E.N.D.S.',
        image:'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0108778/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 43 ,
        name : 'Why Women Kill',
        image:'https://m.media-amazon.com/images/M/MV5BNjIwMjc1MmUtMmFkZC00N2ZiLTliZjktZDE3NWY4NmNiZTA2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9054904/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id:44 ,
        name : 'The Office',
        image:'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0386676/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 45 ,
        name : 'Hacks',
        image:'https://m.media-amazon.com/images/M/MV5BZTI0MzA0ODQtNmRhNS00ZDViLTllM2MtMTY5YmRjMjljZDcwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt11815682/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 46,
        name : 'Love, Death and Robots',
        image:'https://m.media-amazon.com/images/M/MV5BYjEwOWQ0MjktMjZjNy00Mzc1LWE5NTItMDQ1Yjc0Zjk0NTBlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9561862/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 47,
        name : 'This Is Us',
        image:'https://m.media-amazon.com/images/M/MV5BYjNlOWY2OWEtMGQyOC00YWQ4LWJkMjUtYzU4NGEzNjM2MWY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt5555260/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 48,
        name : 'Modern Family',
        image:'https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1442437/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 49,
        name : "Schitt's Creek",
        image:'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'comedy'
    },
    {
        id: 50,
        name : 'The Big Bang Theory',
        image:'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0898266/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 51,
        name : 'Brooklyn Nine-Nine',
        image:'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2467372/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 52,
        name : 'Shameless',
        image:'https://m.media-amazon.com/images/M/MV5BZGFiOGY1MjAtNWM2Yy00YzBlLTkwODktMTZiOWMyZmNmZmZhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UY98_CR3,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1586680/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 53,
        name : "It's Always Sunny In Philadelphia",
        image:'https://m.media-amazon.com/images/M/MV5BOTExNGZkMWMtMmIwZC00YjA3LTgwM2ItZjQ2YmZkMzQ1YWZkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0472954/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id:54 ,
        name : 'How I Met Your Mother',
        image:'https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_UY98_CR3,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0460649/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 55,
        name : 'Ted Lasso',
        image:'https://m.media-amazon.com/images/M/MV5BY2MxYjVlNzAtMDdhOS00N2U2LThlYWQtN2MwMWJjYjFhYzM5XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt10986410/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id:56 ,
        name : 'Kobra Kai',
        image:'https://m.media-amazon.com/images/M/MV5BOTE1M2Q3YjQtZGMzYy00MDcwLWIzNzctYzI3MDBhMjBmYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt7221388/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 57,
        name : 'Rick and Morty',
        image:'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2861424/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 58,
        name : 'Community',
        image:'https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1439629/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id:59 ,
        name : 'Perks and Creations',
        image:'https://m.media-amazon.com/images/M/MV5BMjA5MjUxNDgwNF5BMl5BanBnXkFtZTgwMDI5NjMwNDE@._V1_UY98_CR3,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1266020/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 60,
        name : 'The Simpsons',
        image:'https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0096697/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id: 61,
        name : 'The Walking Dead',
        image:'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1520211/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 62,
        name : 'Stranger Things',
        image:'https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt4574334/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 63,
        name : 'SuperNatural',
        image:'https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0460681/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id:64 ,
        name : 'Hannibal',
        image:'https://m.media-amazon.com/images/M/MV5BNWU5YmJhNWEtZGVlOS00NmRhLThmNzUtYjAyMDA2MDg5ZTM4XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2243973/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 65,
        name : 'Servant',
        image:'https://m.media-amazon.com/images/M/MV5BNGRhYmYyZWUtYzY5YS00YTE0LWI5OWEtZTQ4OTk2Mjg0YTIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt8068860/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 66,
        name : 'The Twilight Zone',
        image:'https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'horror'
    },
    {
        id: 67,
        name : 'Gravity Falls',
        image:'https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt1865718/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 68,
        name : 'Bates Motel',
        image:'https://m.media-amazon.com/images/M/MV5BMzk4OTU5NTE2M15BMl5BanBnXkFtZTcwNTIxMDIyOQ@@._V1_UY98_CR3,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2188671/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 69,
        name : 'The Terror',
        image:'https://m.media-amazon.com/images/M/MV5BYTJjODJjMjAtMmQzYi00OTI2LWFiMTktNDBiZjY5MDA3MWE1XkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2708480/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 70,
        name : 'The Strain',
        image:'https://m.media-amazon.com/images/M/MV5BNjQxNzVlNjQtMTg3YS00MzBmLThkNzAtMzMyNDUyMTVlNzg0XkEyXkFqcGdeQXVyOTQxNzM2MjY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2654620/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 71,
        name : 'Calls',
        image:'https://m.media-amazon.com/images/M/MV5BZWMwYjk5Y2YtNTI0Ni00ZTljLThjYmMtNWMyMDcyODA5ZDUyXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9327706/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 72,
        name : 'The Exorcist',
        image:'https://m.media-amazon.com/images/M/MV5BMjEzNjI5Njg4MV5BMl5BanBnXkFtZTgwMjkwMjU2MzI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt5368542/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 73,
        name : 'Dark Shadows',
        image:'https://m.media-amazon.com/images/M/MV5BMTg4NzkwODMyNl5BMl5BanBnXkFtZTYwMTI5ODY5._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0059978/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 74 ,
        name : 'Parasyte : The Maxim',
        image:'https://m.media-amazon.com/images/M/MV5BZTViMTZlMjgtNjVmZC00NjEzLWJlN2QtMjQ4ZTYxNzBiZmMyXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt3358020/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 75,
        name : 'Fortitude',
        image:'https://m.media-amazon.com/images/M/MV5BNzE1MGNmOGQtYWZkOS00MDExLWIzMjUtYmQxZTFlMzA5YjZhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt3498622/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 76,
        name : 'Black Spot',
        image:'https://m.media-amazon.com/images/M/MV5BOTI3Y2VlNjItNzIxMy00OTI4LTkxMWItYzFiY2Q3ODBiOWU2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt6519410/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 77,
        name : 'The Following',
        image:'https://m.media-amazon.com/images/M/MV5BZjgzMDVlY2EtOTMxMC00ODAxLTk0MmQtYzdkMjNlNjY5NjJmXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2071645/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 78,
        name : 'Beauty And The Beast',
        image:'https://m.media-amazon.com/images/M/MV5BMTM3MzE1ODE4OF5BMl5BanBnXkFtZTcwODI0MTcyOA@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2193041/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 79,
        name : 'Hemlock Grave',
        image:'https://m.media-amazon.com/images/M/MV5BMTM3MzE1ODE4OF5BMl5BanBnXkFtZTcwODI0MTcyOA@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2193041/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 80,
        name : 'Sweet Home',
        image:'https://m.media-amazon.com/images/M/MV5BNDU1YWJkMDAtYmY1NS00OTNlLWI5OWItYjNjNzFkODQzOWYzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt11612120/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id: 81 ,
        name : 'Ragnarok',
        image:'https://m.media-amazon.com/images/M/MV5BODM3NTZkZTUtYzEyYS00NjEyLTg2NjEtNDhlMjYwY2ZkNGUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9251798/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 82,
        name : 'Game Of Thrones',
        image:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0944947/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 83,
        name : 'Sweet Tooth',
        image:'https://m.media-amazon.com/images/M/MV5BOTk4ZDRhYzEtZWExNy00MjIyLTgyYmMtN2Y2MzA4YzZhZTZmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt12809988/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 84,
        name : 'Invincible',
        image:'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt6741278/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 85,
        name : 'Shadow And Bone',
        image:'https://m.media-amazon.com/images/M/MV5BNTNhY2JlMmItMGMzZi00ZTM2LTlmNTItZDBkMGVhNGJhYWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2403776/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 86,
        name : 'The Family Man',
        image:'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9544034/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 87,
        name : 'The Boys',
        image:'https://www.imdb.com/title/tt1190634/?ref_=adv_li_tt',
        imdblink :'https://www.imdb.com/title/tt1190634/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 88,
        name : 'LOKI',
        image:'https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt9140554/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 89,
        name : 'VIKINGS',
        image:'https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt2306299/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 90,
        name : 'The Flash',
        image:'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt3107288/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 91,
        name : 'Star Wars : The Bad Batch',
        image:'https://m.media-amazon.com/images/M/MV5BZTVjNTVjMDMtNjUyMC00ZmM0LWE4OWMtMWZkNzY4NjM0NDMzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt12708542/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 92,
        name : 'The Mandolorian',
        image:'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt8111088/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 93,
        name : 'Castlevania',
        image:'https://m.media-amazon.com/images/M/MV5BYWUwN2UwYTktMDk4OC00YTg0LThmNTItNWE3ZjQxOTIxZTg3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt6517102/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 94,
        name : 'The Last Kingdom',
        image:'https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'action'
    },
    {
        id: 95,
        name : 'The Witcher',
        image:'https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt5180504/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 96,
        name : 'Star Trek : Next Generation',
        image:'https://m.media-amazon.com/images/M/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0092455/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 97,
        name : 'Prison Break',
        image:'https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0455275/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 98 ,
        name : 'Star Wars : The Clone Wars',
        image:'https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0458290/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 99,
        name : 'Buffy the Vampire Slayer',
        image:'https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0118276/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 100,
        name : '24',
        image:'https://m.media-amazon.com/images/M/MV5BMTg5OTkyNzA0NF5BMl5BanBnXkFtZTcwMDYyMDUwMg@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink :'https://www.imdb.com/title/tt0285331/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id: 101,
        name : 'Lucifer',
        image : 'https://www.imdb.com/title/tt0285331/?ref_=adv_li_tt',
        imdblink : 'https://www.imdb.com/title/tt4052886/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 102,
        name : "The Handmaid's Tale",
        image : 'https://m.media-amazon.com/images/M/MV5BZGZiMTkzZjktNzk0OC00NzEzLWJjOTMtYjdkMWM1NGU1ZDM4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5834204/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 103,
        name : 'Game Of Thrones',
        image : 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0944947/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 104,
        name : 'Sweet Tooth',
        image : 'https://m.media-amazon.com/images/M/MV5BOTk4ZDRhYzEtZWExNy00MjIyLTgyYmMtN2Y2MzA4YzZhZTZmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt12809988/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 105,
        name : 'YellowStone',
        image : 'https://m.media-amazon.com/images/M/MV5BZjhkNWM1NTQtODI4NS00NzllLTg1ODAtYjg3N2QxZjc3ZjRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4236770/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 106,
        name : 'The Walking Dead',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1520211/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 107,
        name : 'Peaky Blinders',
        image : 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2442560/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 108,
        name : 'Breaking bad',
        image : 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0903747/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 109,
        name : 'Fear The Walking Dead',
        image : 'https://m.media-amazon.com/images/M/MV5BNDZkYTRjMWQtZThiOS00MjJlLWFkNDktNzNhODNhOWNlNjdjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3743822/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 110,
        name : 'The Family Man',
        image : 'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_UY98_CR5,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt9544034/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 111,
        name : 'Criminal Minds',
        image : 'https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'drama'
    },
    {
        id: 112,
        name : 'The Boys',
        image : 'https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1190634/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 113,
        name : 'This Is Us',
        image : 'https://m.media-amazon.com/images/M/MV5BYjNlOWY2OWEtMGQyOC00YWQ4LWJkMjUtYzU4NGEzNjM2MWY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5555260/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 114,
        name : 'VIKINGS',
        image : 'https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2306299/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 115,
        name : 'Line Of Duty',
        image : 'https://m.media-amazon.com/images/M/MV5BMTExZDZjNTMtNDVmNy00ZTk2LWFiMzUtZDlkZGRlOGU0ZWRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2303687/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 116,
        name : 'Broken But Beautiful',
        image : 'https://m.media-amazon.com/images/M/MV5BMDM3MDQyODAtZDJjMy00MWU2LWFlMmEtNThhMTg3MjBhZjZlXkEyXkFqcGdeQXVyODI2MzM0MTM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8317568/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 117,
        name : 'Money Heist',
        image : 'https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt6468322/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 118,
        name : 'The Sopranus',
        image : 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0141842/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 119,
        name : 'Master Of None',
        image : 'https://m.media-amazon.com/images/M/MV5BYTJlYWJiZTItZGM5NC00MTJjLWFlNTMtMTkxOGFiZTMwNDNlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4635276/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 120,
        name : "Schitt's Creek",
        image : 'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3526078/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id: 121,
        name :'Battlestar Galactia',
        image : 'https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY209_CR1,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0407362/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 122,
        name :'Doctor Who',
        image : 'https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR4,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0436992/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 123,
        name :'Wetworld',
        image : 'https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0475784/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 124,
        name :'Dark',
        image : 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5753856/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 125,
        name :'Lost',
        image : 'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX140_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0411008/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 126,
        name :'Black Mirror',
        image : 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2085059/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 127,
        name :'Stranger Things',
        image : 'https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4574334/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 128,
        name :'The Twilight Zone',
        image : 'https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0052520/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 129,
        name :'The Mandalorian',
        image : 'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8111088/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 130,
        name :'The Expanse',
        image : 'https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3230854/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 131,
        name :'Utopia',
        image : 'https://m.media-amazon.com/images/M/MV5BMjMwMTA5NDc5M15BMl5BanBnXkFtZTgwMjQ4MTY0MjE@._V1_UY209_CR1,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2384811/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 134,
        name :'Sense8',
        image : 'https://m.media-amazon.com/images/M/MV5BMjA4MTEyMzcwMl5BMl5BanBnXkFtZTgwMTIwODczNTM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2431438/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 135,
        name :'Star Trek : The Next Generation',
        image : 'https://m.media-amazon.com/images/M/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY209_CR3,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0092455/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 136,
        name :'Fringe',
        image : 'https://m.media-amazon.com/images/M/MV5BMjE2NTA2OTA2Nl5BMl5BanBnXkFtZTcwODM0NDM1Ng@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1119644/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 137,
        name :'Orphan Black',
        image : 'https://m.media-amazon.com/images/M/MV5BZjM1ZTVlMGYtNjVkZS00OGMzLWFjMmYtYTE3NjJhZDRlODY3XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2234222/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 138,
        name :'The 4400',
        image : 'https://m.media-amazon.com/images/M/MV5BOWM4ZWYzMTQtMzQ2ZS00ZDQzLWFhNDItZDEyNjhmYjdmNjNjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY209_CR4,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0389564/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 139,
        name :'Raised By Wolves',
        image : 'https://m.media-amazon.com/images/M/MV5BYWUzMGZjNjgtMzkwYS00MTdhLTlhYzItYTEzMjRjMjkzZmM3XkEyXkFqcGdeQXVyMTE5MzYzMDE5._V1_UX140_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt9170108/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    {
        id: 140,
        name :'The Man In The High Castle',
        image : 'https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_UY209_CR0,0,140,209_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1740299/?ref_=ttls_li_tt',
        category : 'sci-fi'
    },
    

];

const allmovies = [
    {
        id:1 ,
        name :'The Dark Night',
        image : 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 2,
        name :'Se7en',
        image : 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0114369/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 3,
        name :'The Wolf Of Wall Street',
        image : 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0993846/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 4,
        name :'The Departed',
        image : 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 5,
        name :'The Godfather : Part II',
        image : 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 6,
        name :'Joker',
        image : 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt7286456/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 7,
        name :'Catch Me If You Can',
        image : 'https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0264464/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 8,
        name :'Taxi Driver',
        image : 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0075314/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 9,
        name :'City Of God',
        image : 'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0317248/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 10,
        name :'Fargo',
        image : 'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0116282/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id:11,
        name : 'Prisoners',
        image : 'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1392214/?ref_=adv_li_tt',
        category: 'crime'
    },
    {
        id: 12,
        name : 'Now You See Me (I)',
        image : 'https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt1670345/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 13,
        name : 'Heat',
        image : 'https://m.media-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0113277/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 14,
        name : 'Taken (I)',
        image : 'https://m.media-amazon.com/images/M/MV5BMTM4NzQ0OTYyOF5BMl5BanBnXkFtZTcwMDkyNjQyMg@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0936501/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 15,
        name : 'John Wick',
        image : 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt2911666/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 16,
        name : 'LA Confidential',
        image : 'https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0119488/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 17,
        name : 'Knives Out',
        image : 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt8946378/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 18,
        name : 'Baby Driver',
        image : 'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt3890160/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 19,
        name : 'John Wick : Chapter 2',
        image : 'https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt4425200/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 20,
        name : 'The Godfather : Part III',
        image : 'https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0099674/?ref_=adv_li_tt',
        category : 'crime'
    },
    {
        id: 21,
        name : 'The Dark Night',
        image : 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 22,
        name : 'Inception',
        image : 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt1375666/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 23,
        name : 'Drishyam 2',
        image : 'https://m.media-amazon.com/images/M/MV5BM2RiZDVjYWEtZGNhYy00ZGU0LTgwZjMtZTJmNmMyNGQ5NGYyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt12361178/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 24,
        name : 'Parasite',
        image : 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 25,
        name : 'Se7en',
        image : 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0114369/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 26,
        name : 'Raatchasan',
        image : 'https://m.media-amazon.com/images/M/MV5BMjU2NzIzMjYtMGE2ZS00YzgzLWE5MzgtZTFiYTlmOWNlYmJkXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt7060344/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 27,
        name : 'The Departed',
        image : 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 28,
        name : 'Joker',
        image : 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt7286456/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 29,
        name : 'Tumbadd',
        image : 'https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt8239946/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 30,
        name : 'Drishyam',
        image : 'https://m.media-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY98_CR4,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt3417422/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 31,
        name : 'Andhadhun',
        image : 'https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt8108198/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 32,
        name : 'Gangs Of Wasseypur',
        image : 'https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt1954470/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 33,
        name : 'Shutter Island',
        image : 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt1130884/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 34,
        name : 'Logan',
        image : 'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'thriller'
    },
    {
        id: 35,
        name : 'Gone Girl',
        image : 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt2267998/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 36,
        name : 'Prisoners',
        image : 'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt1392214/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 37,
        name : 'V for Vendetta',
        image : 'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0434409/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 38,
        name : 'Fargo',
        image : 'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0116282/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 39,
        name : 'No Country For Old Men',
        image : 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0477348/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id: 40,
        name : 'Memories Of Murder',
        image : 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink: 'https://www.imdb.com/title/tt0353969/?ref_=adv_li_tt',
        category : 'thriller'
    },
    {
        id : 41,
        name : 'Parasite',
        image : 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 42,
        name : '3 idiots',
        image : 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1187043/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 43,
        name : 'Chhichhore',
        image : 'https://m.media-amazon.com/images/M/MV5BYjg2ZDI2YTYtN2EwYi00YWI5LTgyMWQtMWFkYmE3NmJkOGVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt9052870/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 44,
        name : 'Green Book',
        image : 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : '',
        category : 'comedy'
    },
    {
        id : 45,
        name : 'Gangs Of Wasseypur',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1954470/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 46,
        name : 'Zindagi Na Milegi Dobara',
        image : 'https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1562872/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 47,
        name : 'Toy Story 3',
        image : 'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0435761/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 48,
        name : 'Hera Pheri',
        image : 'https://m.media-amazon.com/images/M/MV5BMGMzZjY2ZWQtZjQxYS00NWY3LThhNjItNWQzNTkzOTllODljXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BMGMzZjY2ZWQtZjQxYS00NWY3LThhNjItNWQzNTkzOTllODljXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY98_CR1,0,67,98_AL_.jpg',
        category : 'comedy'
    },
    {
        id : 49,
        name : 'Wild Tales',
        image : 'https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3011894/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 50,
        name : 'PK',
        image : 'https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2338151/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 51,
        name : 'OMG : Oh My God!',
        image : 'https://m.media-amazon.com/images/M/MV5BMGNhYjUwNmYtNDQxNi00NDdmLTljMDAtZWM1NDQyZTk3ZDYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2283748/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 52,
        name : 'Barfi!',
        image : 'https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2082197/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 53,
        name : 'Mary and Max',
        image : 'https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0978762/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 54,
        name : 'Rang De Basanti',
        image : 'https://m.media-amazon.com/images/M/MV5BYThmZDA0YmQtMWJhNy00MDQwLTk0Y2YtMDhmZTE5ZjhlNjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0405508/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 55,
        name : 'Munna Bhai M.B.B.S.',
        image : 'https://m.media-amazon.com/images/M/MV5BMzQ4MTBlYTQtMzJkYS00OGNjLTk1MWYtNzQ0OTQ0OWEyOWU1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0374887/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 56,
        name : 'Dil Chahta Hai',
        image : 'https://m.media-amazon.com/images/M/MV5BMzcxOWU3ZTAtZmYwYS00MzJmLWI1MmEtYmJlOTFjYTAxMWUwXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0292490/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 57,
        name : 'The Truman Show',
        image : 'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0120382/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 58,
        name : 'Badhaai Ho',
        image : 'https://m.media-amazon.com/images/M/MV5BNjZlMDdmN2YtYThmZi00NGQzLTk0ZTQtNTUyZDFmODExOGNiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt7725596/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 59,
        name : 'Bajrangi Bhaijaan',
        image : 'https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3863552/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 60,
        name : 'Deadpool',
        image : 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1431045/?ref_=adv_li_tt',
        category : 'comedy'
    },
    {
        id : 61,
        name : 'Tumbadd',
        image : 'https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8239946/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 62,
        name : 'The Blue Elephant',
        image : 'https://m.media-amazon.com/images/M/MV5BNDkxMzk2ODU4N15BMl5BanBnXkFtZTgwNTM4NjIzMjE@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3461252/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 63,
        name : 'A Quite Place Part II',
        image : 'https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8332922/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 64,
        name : 'Let The Right One In',
        image : 'https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1139797/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 65,
        name : 'Shaun Of The Dead',
        image : 'https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0365748/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 66,
        name : 'I Saw The Devil',
        image : 'https://m.media-amazon.com/images/M/MV5BZjRmNjc5MTYtYjc3My00ZjNiLTg4YjUtMTQ0ZTFkZmMxMDUzXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_UY98_CR3,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1588170/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 67,
        name : 'Get Out (I)',
        image : 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5052448/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 68,
        name : 'What We Do In The Shadows',
        image : 'https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3416742/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 69,
        name : 'Stree',
        image : 'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8108202/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 70,
        name : 'Train To Busan',
        image : 'https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5700672/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 71,
        name : 'The Sky I Live In',
        image : 'https://m.media-amazon.com/images/M/MV5BMjMwOTYyNDY4NV5BMl5BanBnXkFtZTcwNDI1ODk0Ng@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1189073/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 72,
        name : 'Zombieland',
        image : 'https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1156398/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 73,
        name : 'The LightHouse (I)',
        image : 'https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt7984734/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 74,
        name : 'A Quite Place',
        image : 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt6644200/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 75,
        name : 'The Conjuring',
        image : 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1457767/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 76,
        name : 'Hereditary',
        image : 'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt7784604/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 77,
        name : 'The Conjuring 2',
        image : 'https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3065204/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 78,
        name : 'It',
        image : 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1396484/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 79,
        name : 'Grindhouse',
        image : 'https://m.media-amazon.com/images/M/MV5BMjA0MzExNzc3MV5BMl5BanBnXkFtZTcwODAxMzM0MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BMjA0MzExNzc3MV5BMl5BanBnXkFtZTcwODAxMzM0MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'horror'
    },
    {
        id : 80,
        name : 'Tucker and Dale vs Evil',
        image : 'https://m.media-amazon.com/images/M/MV5BODQ5NDQ0MjkwMF5BMl5BanBnXkFtZTcwNDg1OTU4NQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1465522/?ref_=adv_li_tt',
        category : 'horror'
    },
    {
        id : 81,
        name : 'The Dark Night',
        image : 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 82,
        name : 'The Lord Of Rings : The Return Of The King',
        image : 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 83,
        name : 'Inception',
        image : 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'action'
    },
    {
        id : 84,
        name : 'The Lord Of The Ring : The Feloowship Of The Ring',
        image : 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0120737/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 85,
        name : 'The Lord Of The Rings : The Two Towers',
        image : 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0167261/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 86,
        name : 'The Matrix',
        image : 'https://www.imdb.com/title/tt0167261/?ref_=adv_li_tt',
        imdblink : 'https://www.imdb.com/title/tt0133093/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 87,
        name : 'Raatchasan',
        image : 'https://m.media-amazon.com/images/M/MV5BMjU2NzIzMjYtMGE2ZS00YzgzLWE5MzgtZTFiYTlmOWNlYmJkXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt7060344/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 88,
        name : 'Gladiator',
        image : 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0172495/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 89,
        name : 'Dangal',
        image : 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5074352/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 90,
        name : 'Spiderman : Into The Spiderverse',
        image : 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4633694/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 91,
        name : 'Avengers : Endgame',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4154796/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 92,
        name : 'Avengers : Infinity War',
        image : 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4154756/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 93,
        name : 'The Dark Night Raises',
        image : 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1345836/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 94,
        name : 'Oldboy',
        image : 'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0364569/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 95,
        name : 'Gangs Of Wasseypur',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1954470/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 96,
        name : 'Batman Begins',
        image : 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0372784/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 97,
        name : 'Logan',
        image : 'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3315342/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 98,
        name : 'Jurassic Park',
        image : 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0107290/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 99,
        name : 'V For Vendetta',
        image : 'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0434409/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 100,
        name : 'How To Train Your Dragon',
        image : 'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0892769/?ref_=adv_li_tt',
        category : 'action'
    },
    {
        id : 101,
        name : 'The Shawshank Redemption',
        image : 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 102,
        name : 'The Godfather',
        image : 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 103,
        name : 'The Dark Night',
        image : 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 104,
        name : 'The godfather : Part II',
        image : 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 105,
        name : 'The Lord Of The Rings : The Return Of The king',
        image : 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'drama'
    },
    {
        id : 106,
        name : 'The Lord Of The RIngs : The Fellowship Of The Ring',
        image : 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0120737/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 107,
        name : 'Drishyam 2',
        image : 'https://m.media-amazon.com/images/M/MV5BM2RiZDVjYWEtZGNhYy00ZGU0LTgwZjMtZTJmNmMyNGQ5NGYyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt12361178/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 108,
        name : 'Parasite',
        image : 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 109,
        name : 'Interstellar',
        image : 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0816692/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 110,
        name : 'Whiplash',
        image : 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2582802/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 111,
        name : 'The Intouchables',
        image : 'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1675434/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 112,
        name : 'The Hamilton',
        image : 'https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8503618/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 113,
        name : 'Joker',
        image : 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt7286456/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 114,
        name : 'Dangal',
        image : 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt5074352/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 115,
        name : 'Avangers : Endgame',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt4154796/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 116,
        name : 'Django Unchanged',
        image : 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1853728/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 117,
        name : '3 Idiots',
        image : 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1187043/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 118,
        name : 'Like Stars On The Earth',
        image : 'https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0986264/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 119,
        name : '1917',
        image : 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8579674/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id : 120,
        name : 'Tumbbad',
        image : 'https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8239946/?ref_=adv_li_tt',
        category : 'drama'
    },
    {
        id :121 ,
        name : 'Inception',
        image : 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1375666/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 122,
        name : 'Frankstein',
        image : 'https://m.media-amazon.com/images/M/MV5BMzIwYzRmZTQtOThhYy00YjIzLThkODEtMjE2MGRjYzY1ODY1XkEyXkFqcGdeQXVyNTE0MzczOTk@._V1_UY98_CR1,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1795369/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 123,
        name : 'Interstellar',
        image : 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0816692/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 124,
        name : 'The Matrix',
        image : 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0133093/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 125,
        name : 'Lucia (I)',
        image : 'https://m.media-amazon.com/images/M/MV5BMTQyMDA5ODkzN15BMl5BanBnXkFtZTgwMjIzMDkyMDE@._V1_UY98_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2358592/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 126,
        name : 'Logan',
        image : 'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3315342/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 127,
        name : 'Mad Max : Fury Road',
        image : 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1392190/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 128,
        name : 'Jurassic Park',
        image : 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0107290/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 129,
        name : 'The Martian',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'sci-fi'
    },
    {
        id : 130,
        name : 'Her',
        image : 'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1798709/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 131,
        name : 'Blade Runner 2049',
        image : 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1856101/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 132,
        name : 'G.O.R.A.',
        image : 'https://m.media-amazon.com/images/M/MV5BMjE0MTY2MDI3NV5BMl5BanBnXkFtZTcwNTc1MzEzMQ@@._V1_UY98_CR2,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0384116/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 133,
        name : 'A Quite Place Part II',
        image : 'https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt8332922/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 134,
        name : 'Arrival (II)',
        image : 'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt2543164/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 135,
        name : 'X-Men Days Of Future Past',
        image : 'https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt1877832/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 136,
        name : 'Edge Of Tomorrow',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_UX67_CR0,0,67,98_AL_.jpg',
        category : 'sci-fi'
    },
    {
        id : 137,
        name : 'Start Trek',
        image : 'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0796366/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 138,
        name : 'Iron Man',
        image : 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0371746/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 139,
        name : 'Children Of Men',
        image : 'https://m.media-amazon.com/images/M/MV5BMTQ5NTI2NTI4NF5BMl5BanBnXkFtZTcwNjk2NDA2OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt0206634/?ref_=adv_li_tt',
        category : 'sci-fi'
    },
    {
        id : 140,
        name : 'Rouge One : A Star Wars Story',
        image : 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_UX67_CR0,0,67,98_AL_.jpg',
        imdblink : 'https://www.imdb.com/title/tt3748528/?ref_=adv_li_tt',
        category : 'sci-fi'
    },

];


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

const showback = document.querySelector('#showback');
const movieback = document.querySelector('#movieback');

const frontpage = document.querySelector('.frontpage');

const hidefrontpageshow = document.querySelector('.hidefrontpageshow');
const hidefrontpagemovie = document.querySelector('.hidefrontpagemovie');

const showshows = document.querySelector('.showshows');

const showmovies = document.querySelector('.showmovies');

const shows = document.querySelector('.shows');

const movies = document.querySelector('.movies');

btn1.addEventListener('click',function(){
    frontpage.classList.add('hidefrontpageshow');
    shows.classList.add('showshows');
})

btn2.addEventListener('click',function(){
    frontpage.classList.add('hidefrontpagemovie');
    movies.classList.add('showmovies');
})

showback.addEventListener('click',function(){
    frontpage.classList.remove('hidefrontpageshow');
    shows.classList.remove('showshows');
    
})

movieback.addEventListener('click',function(){
    frontpage.classList.remove('hidefrontpagemovie');
    movies.classList.remove('showmovies');
    
})


/*--------------SHOW------------ */

const showResult = document.querySelector('.showresult');

const genrebtn = document.querySelectorAll('.genrebtn');

genrebtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const showCategory = allshows.filter(function(showItem){
            if(showItem.category === category){
                return showItem;
            }
        });
        const showNumber = Math.ceil(Math.random()*20);
        // console.log(showCategory[showNumber]);
        // let showingItem = showCategory[showNumber];
        displayShowItems(showCategory[showNumber]);
        // console.log(showCategory[showNumber]);


    });
});

function displayShowItems(itemsShow){
   
    showResult.innerHTML = `<img
          src="${itemsShow.image}"
          class="showresultimage" alt=""/>
        <div class="showdetails">
          <div class="showshowname">Movie Name : <span>${itemsShow.name}</span></div>
          <a href="${itemsShow.imdblink}" target = '_blank'>Check This Show On IMDB</a >
          <div class="warning">Chose same or different genre again !!</div>
        </div>`;

}


/*----------------------MOVIE------------------------*/


const movieResult = document.querySelector('.movieresult');

const genrebtn2 = document.querySelectorAll('.genrebtn2');

genrebtn2.forEach(function(btn2){
    btn2.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const movieCategory = allmovies.filter(function(movieItem){
            if(movieItem.category === category){
                return movieItem;
            }
        });
        const movieNumber = Math.ceil(Math.random()*10);
        
        displayMovieItems(movieCategory[movieNumber]);
        
        // console.log(movieCategory[movieNumber]);

    });
});

function displayMovieItems(itemsMovie){
   
    movieResult.innerHTML = ` <img
          src="${itemsMovie.image}" class="movieresultimage" alt="" />
        <div class="moviedetails">
          <div class="showmoviename">Show Name : <span>${itemsMovie.name}</span></div>
          <a href="${itemsMovie.imdblink}" target = "_blank">Check This Movie On IMDB</a>
          <div class="warning">Chose same or different genre again !!</div>
        </div>`;

}