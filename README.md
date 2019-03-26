# TaxProblem assignment

This problem is  solved by a small **NodeJs** application.
I used **jest** to run tests and describe all the application use cases. I also covered all examples described at [https://github.com/xpeppers/sales-taxes-problem](https://github.com/xpeppers/sales-taxes-problem).
 

## Running the application

The application is written Javascript using NodeJs, but I wrote a **Dockerfile** to build and run the application tests inside a **container**. 
So you can choose to run the application tests with Docker or NodeJS.

### Running with docker

You can build the application simply copying and pasting the following commands inside your terminal *(assuming you have already installed docker)*
````
git clone https://github.com/bonaccorsop/taxes-assignment
build -t bonaccorsop-assignment ./taxes-assignment
docker run bonaccorsop-assignment
````

### Running with NodeJS

If you don't want to use docker and you have already installed NodeJS in your machine, copy and paste the following lines in your terminal:
````
git clone https://github.com/bonaccorsop/taxes-assignment
npm --prefix taxes-assignment install
npm --prefix taxes-assignment test
````


## Checking the code
The code is written inside the **./src** directory and consists in 2 main modules files and a small *utils* file. All the tests are located in the **./tests** directory.
I choose to publish this project with the **MIT** license as it's described in the **./package.json** file. 
That's all!



