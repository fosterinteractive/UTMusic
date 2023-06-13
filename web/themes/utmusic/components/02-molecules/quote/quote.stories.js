import quote from './quote.twig';

import quoteTextData from './quote--text.yml';
import quoteImageData from './quote--image.yml';
import quoteImageMainData from './quote--image-main.yml';


/**
 * Storybook Definition.
 */

export default { 
  title: 'Molecules/Quote',
  component: quote,

  argTypes: {
    //Quote variation
    // variation: {
    //   defaultValue: quoteImageData.variation,
    //   description: 'Quote variation',
    //   type: { required: 'true' },
    //   control: {
    //     type: 'select',
    //     options: { 
    //       'Default[text with icon]': quoteImageData.variation, 
    //     },
    //   },
    //   table: {
    //     type: {
    //       summary: 'string (plain text)',
    //     },
    //   },
    // },
    // Quote text
    text: {
      description: 'Quote text field',
      type: {required: true},
      defaultValue: quoteImageData.text,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
    // Quote source name
    source_name: {
      description: 'Quote source name',
      defaultValue: quoteImageData.source_name,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Quote location
    location: {
      description: 'Quote location',
      defaultValue: 'Blank',
      control: {
        type: 'select',
        options: {
          'Blank': 'Blank',
          'Alberta': 'Alberta',
          'Newfoundland and Labrador': 'Newfoundland and Labrador',
          'Prince Edward Island': 'Prince Edward Island',
          'New Brunswick': 'New Brunswick',
          'Ontario': 'Ontario',
          'Manitoba': 'Manitoba',
          'Saskatchewan': 'Saskatchewan',
          'British Columbia': 'British Columbia',
          'Yukon': 'Yukon',
          'Northwest Territories': 'Northwest Territories',
          'Nunavut': 'Nunavut',
        }
      },
      table: {
        type: { 
          summary: 'Blank| Alberta | Newfoundland and Labrador | Prince Edward Island | New Brunswick | Ontario | Manitoba | Saskatchewan | British Columbia | Yukon | Northwest Territories | Nunavut', 
        },
      },
    },
    // Quote source type
    source_type: {
      description: 'Quote source type',
      defaultValue: quoteImageData.source_type,
      control: {
        type: 'select',
        options: {
          "Mentor": 'Mentor',
          "Participant": 'Participant',
        }
      },
      table: {
        type: { summary: 'Mentor | Participant' },
      },
    },
  },
};

// export const QuoteDemo = ({
//   variation,  
//   text, 
//   source_name, 
//   location,
//   source_type,
//    }) => 

//     quote({
//       variation,
//       text,
//       source_name,
//       location,
//       source_type
     
//     });  

export const QuoteText = () => quote(quoteTextData);  
export const QuoteImage = () => quote(quoteImageData);  
export const QuoteImageMain = () => quote(quoteImageMainData);  
