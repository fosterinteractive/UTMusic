import message from './message.twig';
import messageStatus from './message--status.twig';


import messageData from './message.yml';
import messageLowData from './message--low.yml';
import messageMediumData from './message--medium.yml';
import messageHighData from './message--high.yml';

import messageStatusData from './message--status.yml';
/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Molecules/Message',
  component: message,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Message and Message(Status). We use different templates for these two types of message',
      },
    },
  },

  argTypes: {
    //Message variation
    variation: {
      defaultValue: messageData.variation,
      description: 'Message variation',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Default': messageData.variation,
          'Low': messageLowData.variation,
          'Medium': messageMediumData.variation,
          'High': messageHighData.variation,         },
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Message title
    title: {
      defaultValue: messageData.title,
      description: 'Message title',
      type: { required: 'true' },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Message text
    text: {
      defaultValue: messageData.text,
      description: 'Message text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Message text
    date_string: {
      defaultValue: messageData.date_string,
      description: 'Message date',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
     //Message icon
     message_icon: {
      defaultValue: messageData.message_icon,
      description: 'message icon',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //message icon color
    message_icon_color: {
      defaultValue: messageData.message_icon_color,
      description: 'message icon color',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
  },
};

export const Message = ({ variation, title, text, date_string, message_icon, message_icon_color }) => 
  message({
    variation,
    title,
    text,
    date_string,
    message_icon,
    message_icon_color,
  });

export const MessageLow = () => message(messageLowData);
export const MessageMedium = () => message(messageMediumData);
export const MessageHigh = () => message(messageHighData);
export const MessageStatus = () => messageStatus(messageStatusData);
