let express = require('express');
let app = express();
app.set('port', (process.env.PORT || 5000));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://juancho11gm.github.io');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}?retryWrites=true&w=majority`, { useNewUrlParser: true });

let answerSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

let Answer = mongoose.model('Answer', answerSchema);

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello juan sebastián');
});

app.post('/contact', (req, res) => {
  let myData = new Answer(req.body);
  myData.save()
  .then(item => {
    res.send('item saved to database');
  })
  .catch(err => {
    res.status(400).send('unable to save to database');
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});