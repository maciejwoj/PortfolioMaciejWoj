import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Wstawiamy skrypt Flowise */}
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `
                import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
                Chatbot.init({
                  chatflowid: "2a2dc38e-9318-4137-93be-ed185a973c50",
                  apiHost: "https://flowise-rek3.onrender.com",
                  chatflowConfig: {
                    /* Chatflow Config */
                  },
                  observersConfig: {
                    /* Observers Config */
                  },
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
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}
