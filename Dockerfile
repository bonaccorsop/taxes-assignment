# I choose apline linux for my containers because is the lightest distro
FROM node:lts-alpine

####
# Copy all sources inside the image
####

COPY . /code
WORKDIR /code


# Install code dependencies
RUN npm install
RUN npm test

# The only RUN procedure is executing tests...
CMD ["npm", "test"]

