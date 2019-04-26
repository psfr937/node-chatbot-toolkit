import chatbotController from '../controllers/chatbot/think/processLanguage/processCustomActions';
import bodyParser from '../middlewares/bodyParser';


export default app => {
  app.post('/api/chatbot/actions', bodyParser.json, chatbotController);
};