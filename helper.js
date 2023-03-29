const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// middleware for parsing JSON data
app.use(bodyParser.json());

// POST route for the API
app.post('/bfhl', (req, res) => {
  try {
    // get the input array from the request body
    const input = req.body.array;

    // extract the required fields from the request body
    const { f_name, dateofbirth, email_id, roll_no } = req.body;

    // create the user ID field
    const user_id = `${f_name}_${dateofbirth.split('-').join('')}`;

    // initialize the output arrays
    const even = [];
    const odd = [];
    const upper = [];

    // iterate over the input array and classify the elements
    input.forEach((element) => {
      if (typeof element === 'number') {
        if (element % 2 === 0) {
          even.push(element);
        } else {
          odd.push(element);
        }
      } else if (typeof element === 'string') {
        const letters = element.split('');
        letters.forEach((letter) => {
          if (/[a-zA-Z]/.test(letter)) {
            upper.push(letter.toUpperCase());
          }
        });
      }
    });

    // create the response object
    const response = {
      user_id,
      email_id,
      roll_no,
      is_success: true,
      even_numbers: even,
      odd_numbers: odd,
      uppercase_letters: upper,
    };

    // send the response
    res.status(200).json(response);
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// middleware for parsing JSON data
app.use(bodyParser.json());

// POST route for the API
app.post('/bfhl', (req, res) => {
  try {
    // get the input array from the request body
    const input = req.body.array;

    // extract the required fields from the request body
    const { f_name, dateofbirth, email_id, roll_no } = req.body;

    // create the user ID field
    const user_id = `${f_name}_${dateofbirth.split('-').join('')}`;

    // initialize the output arrays
    const even = [];
    const odd = [];
    const upper = [];

    // iterate over the input array and classify the elements
    input.forEach((element) => {
      if (typeof element === 'number') {
        if (element % 2 === 0) {
          even.push(element);
        } else {
          odd.push(element);
        }
      } else if (typeof element === 'string') {
        const letters = element.split('');
        letters.forEach((letter) => {
          if (/[a-zA-Z]/.test(letter)) {
            upper.push(letter.toUpperCase());
          }
        });
      }
    });

    // create the response object
    const response = {
      user_id,
      email_id,
      roll_no,
      is_success: true,
      even_numbers: even,
      odd_numbers: odd,
      uppercase_letters: upper,
    };

    // send the response
    res.status(200).json(response);
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// middleware for parsing JSON data
app.use(bodyParser.json());

// POST route for the API
app.post('/bfhl', (req, res) => {
  try {
    // get the input array from the request body
    const input = req.body.array;

    // extract the required fields from the request body
    const { f_name, dateofbirth, email_id, roll_no } = req.body;

    // create the user ID field
    const user_id = `${f_name}_${dateofbirth.split('-').join('')}`;

    // initialize the output arrays
    const even = [];
    const odd = [];
    const upper = [];

    // iterate over the input array and classify the elements
    input.forEach((element) => {
      if (typeof element === 'number') {
        if (element % 2 === 0) {
          even.push(element);
        } else {
          odd.push(element);
        }
      } else if (typeof element === 'string') {
        const letters = element.split('');
        letters.forEach((letter) => {
          if (/[a-zA-Z]/.test(letter)) {
            upper.push(letter.toUpperCase());
          }
        });
      }
    });

    // create the response object
    const response = {
      user_id,
      email_id,
      roll_no,
      is_success: true,
      even_numbers: even,
      odd_numbers: odd,
      uppercase_letters: upper,
    };

    // send the response
    res.status(200).json(response);
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// middleware for parsing JSON data
app.use(bodyParser.json());

// POST route for the API
app.post('/bfhl', (req, res) => {
  try {
    // get the input array from the request body
    const input = req.body.array;

    // extract the required fields from the request body
    const { f_name, dateofbirth, email_id, roll_no } = req.body;

    // create the user ID field
    const user_id = `${f_name}_${dateofbirth.split('-').join('')}`;

    // initialize the output arrays
    const even = [];
    const odd = [];
    const upper = [];

    // iterate over the input array and classify the elements
    input.forEach((element) => {
      if (typeof element === 'number') {
        if (element % 2 === 0) {
          even.push(element);
        } else {
          odd.push(element);
        }
      } else if (typeof element === 'string') {
        const letters = element.split('');
        letters.forEach((letter) => {
          if (/[a-zA-Z]/.test(letter)) {
            upper.push(letter.toUpperCase());
          }
        });
      }
    });

    // create the response object
    const response = {
      user_id,
      email_id,
      roll_no,
      is_success: true,
      even_numbers: even,
      odd_numbers: odd,
      uppercase_letters: upper,
    };

    // send the response
    res.status(200).json(response);
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});