#pull the node image 
FROM node:20-alpine3.16

#Set the working directory
WORKDIR /app
# copy the package.json and yarn-lock
COPY ./package.json  . yarn.lock ./

#install the dependency
RUN npm install

#Copy the other folder
COPY . .

# Specify the default command to run when the container starts
CMD [ "yarn" ,"start"]