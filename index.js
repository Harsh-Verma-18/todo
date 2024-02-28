import express from "express";
const app=express();

const datas = [{"id":1,"first_name":"Marijo","last_name":"Gilfether"},
{"id":2,"first_name":"Germaine","last_name":"Annett"},
{"id":3,"first_name":"Percival","last_name":"Woolmington"},
{"id":4,"first_name":"Meggy","last_name":"Schubbert"},
{"id":5,"first_name":"Siobhan","last_name":"Spurden"},
{"id":6,"first_name":"Milka","last_name":"Odde"},
{"id":7,"first_name":"Benito","last_name":"Kalb"},
{"id":8,"first_name":"Shani","last_name":"Torrisi"},
{"id":9,"first_name":"Bevan","last_name":"Tilio"},
{"id":10,"first_name":"Nydia","last_name":"Spataro"}]


app.use(express.json())

app.get('/',(req,res)=>{
    res.send(datas);
})

app.post('/',(req,res)=>{
    const id=req.params.id;
    const data=datas.find(datas=>datas.number=== parseInt(id));
    const per=req.body;
    datas.push(per);
    res.send(datas);
})

app.put('/put/:id',(req,res)=>{
    const {id,first_name,last_name}= req.body;
    const todo = datas.find(datas => datas.id == req.params.id);
    todo.id=id;
    todo.first_name=first_name;
    todo.last_name=last_name;
    res.send(datas);
})

app.patch('/patch/:id',(req,res)=>{
    const todo = datas.find(datas => datas.id == req.params.id);
    if (!todo) return res.sendStatus(404);
    todo.completed = !todo.completed;
    res.json(todo);

})

app.delete('/delete/:id',(req,res)=>{
    const num=req.body.params.id;
    const per=datas.find(datas=>datas.id=== parseInt(num));
    res.send(per);
    delete datas[per.id-1];
    res.send(datas);
})

app.listen(5000,()=>{
    console.log("listening to 5000");
});