# file-path
Get path to file without using the absolute path.
## How to use

* Add path hints in *Package.json* for each folder in **filepath** section.
```
 "filepath" : {
		"public" : "dir/public/",
		"src: : "src/components",
	}
```
* Include **filepath** in file where you want to include file.
```
const fp = require('file-path');
```
* Require files with simply adding **key** which mentioned in **package.json** and  **name** of file in that directory.
```
const App = fp('src', 'app');
const Home = fp('src', 'home');
//no nedd to use require('../../app.js')
```
