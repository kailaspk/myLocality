const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/new_app", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });