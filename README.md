## Setup

To setup this repository on your local machine you will need to first clone the repository and make sure you have node and npm installed. - You can test this with `node -v` and `npm -v` - You should see results similar to this

```
❯ node -v
v14.17.4
❯ npm -v
7.22.0
```
**All of the following instruction are intended to be run in the root directory of your application**
## Run in Development mode

- Use the `npm install` command in your terminal to install dependencies
- Once that has completed you can run the project with `npm run start`
- This will run the application in development mode at `http://localhost:3000/`

## Run in Production mode

- To compile the code and run in production mode make sure you have first installed the dependencies with `npm install`
- Then run `npm run build` to compile the code into an optimized production build
- Once this is complete you can preview you application using the serve package
- To install this run `npm install -g serve`
- Then you can serve the application with `serve -s build`
- Once running you will get a link with your application address, it defaults to `http://localhost:5000`

## Testing
- To run the test suite you can run the `npm run test` command
- This will run the tests in watch mode which will rerun when you save
- You can also run specific tests with `npm run test {{filename}}` ex. `npm run test SearchForm`
