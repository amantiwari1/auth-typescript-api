import app from './app'
import './database'

app.listen(app.get('port'))

console.log(`Server http://localhost:${app.get('port')}`);
