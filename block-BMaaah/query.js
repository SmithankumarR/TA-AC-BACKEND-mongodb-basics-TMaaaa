db.articles.insertMany([
    {
        title: 'John Smith',
        details: "John smith is great actor",
        author: {
            name: 'jimmy',
            email: 'jimmy@gmail.com',
            age: 32,

        },
        tags: ['flimy', 'comdey', 'life']
    },
    {
        title: ' Smith makerr',
        details: " smith makerr is great lawyer",
        author: {
            name: 'peul',
            email: 'peul@gmail.com',
            age: 28,

        },
        tags: ['rights', 'social', 'law']
    },
    {
        title: 'Black Smith',
        details: "black smith is great gold makerr",
        author: {
            name: 'jimmyDavid',
            email: 'jimmyDavid@gmail.com',
            age: 22,

        },
        tags: ['social', 'market', 'life']
    }
])
db.articles.find({_id: ObjectId("62f207ad74db48fff4995d58")})
db.articles.find({title:'John Smith',})
db.artilces.find({author : { name : 'jimmyDavid'}}) // wrong answer
db.articles.find({tags:'social'})
db.articles.find({_id: ObjectId("62f207ad74db48fff4995d58")}
,{title:'ishan kishan'})
db.articles.find({tags:'life'},{$push : {tags: 'investor'}})
db.articles.update({title:'Black Smith'}, {$set:{title:'Gold Smith'}})
db.articles.update({title:'Smith makerr'}, {title:'James  smith'},{upsert :true})
db.articles.find({title :'Gold Smith'},{author : { (age + 1)}});
db.articles.remove({_id: ObjectId("62f21b4074db48fff4995d5a")})
db.articles.remove({_id: ObjectId("62f21b4074db48fff4995d59")})


db.users.find({gender : "male"})