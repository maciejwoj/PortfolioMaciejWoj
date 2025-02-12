import { useEffect } from 'react';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Utwórz element <script> i ustaw jego atrybuty
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      Chatbot.init({
        chatflowid: "77286b14-cff3-4c62-960d-49c2655c8e1e",
        apiHost: "https://flowise-9kc0.onrender.com",
        chatflowConfig: { /* Chatflow Config */ },
        observersConfig: { /* Observers Config */ },
        theme: {
          button: {
            backgroundColor: '#0f1624',
            right: 20,
            bottom: 20,
            size: 48,
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
            autoWindowOpen: {
              autoOpen: true,
              openDelay: 2,
              autoOpenOnMobile: false
            }
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: 'Hi!',
            tooltipBackgroundColor: '#0f1624',
            tooltipTextColor: 'white',
            tooltipFontSize: 16
          },
          disclaimer: {
            title: 'Disclaimer',
            message: "By using this chatbot, you agree to the <a target=\\"_blank\\" href=\\"https://flowiseai.com/terms\\">Terms & Condition</a>",
            textColor: 'black',
            buttonColor: '#0f1624',
            buttonText: 'Start Chatting',
            buttonTextColor: 'white',
            blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundColor: 'white'
          },
          customCSS: \`\`,
          chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Assistant',
            titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
            welcomeMessage: 'Hello, How can I help you?',
            errorMessage: 'This is a custom error message',
            backgroundColor: '#ffffff',
            backgroundImage: 'enter image path or link',
            height: 700,
            width: 400,
            fontSize: 14,
            starterPrompts: [
              "What is Maciek's best project?",
              "Tell me about Maciek?",
              "Contact information"
            ],
            starterPromptFontSize: 15,
            clearChatOnReload: false,
            sourceDocsTitle: 'Sources:',
            renderHTML: true,
            botMessage: {
              backgroundColor: '#f7f8ff',
              textColor: '#303235',
              showAvatar: true,
              avatarSrc: '/images/asystentLogo.jpg'
            },
            userMessage: {
              backgroundColor: '#0f1624',
              textColor: '#ffffff',
              showAvatar: false,
              avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
            },
            textInput: {
              placeholder: 'Type your question',
              backgroundColor: '#ffffff',
              textColor: '#303235',
              sendButtonColor: '#0f1624',
              maxChars: 50,
              maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
              autoFocus: true,
              sendMessageSound: true,
              sendSoundLocation: 'send_message.mp3',
              receiveMessageSound: true,
              receiveSoundLocation: 'receive_message.mp3'
            },
            feedback: {
              color: '#303235'
            },
            dateTimeToggle: {
              date: true,
              time: true
            },
            footer: {
              textColor: 'white',
              text: 'Powered by',
              company: 'MaciejW',
              companyLink: 'https://flowiseai.com'
            }
          }
        }
      });
    `;

    // Dodaj skrypt do body
    document.body.appendChild(script);

    // Opcjonalnie: usuń skrypt przy odmontowywaniu komponentu
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
