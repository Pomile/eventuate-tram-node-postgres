const DomainEventPublisher = require('./lib/DomainEventPublisher');
const DomainEventDispatcher = require('./lib/DomainEventDispatcher');
const DefaultChannelMapping = require('./lib/DefaultChannelMapping');
const DefaultDomainEventNameMapping = require('./lib/DefaultDomainEventNameMapping');
const eventMessageHeaders = require('./lib/eventMessageHeaders');
const KafkaConsumerGroup = require('./lib/kafka/KafkaConsumerGroup');
const IdGenerator = require('./lib/IdGenerator');
const MessageProducer = require('./lib/MessageProducer');
const SqlTableBasedDuplicateMessageDetector = require('./lib/SqlTableBasedDuplicateMessageDetector');
const MessageConsumer = require('./lib/kafka/MessageConsumer');
const SwimlaneDispatcher = require('./lib/kafka/SwimlaneDispatcher');
const ObservableQueue = require('./lib/ObservableQueue');
const KafkaProducer = require('./lib/kafka/KafkaProducer');
const dotenv = require('dotenv')
const { getLogger } = require('./lib/utils');
const knex = require('./lib/postgres/knex');
const logger = getLogger({ title: 'eventuateConnection' });
dotenv.config();


(async () => {
  try {
    logger.info(`Host: ${process.env.EVENTUATE_TRAM_POSTGRES_HOST}`)
    await knex.raw('SELECT 1').then(() => {
      
      logger.info('Connection successful')
    }).catch(err => {
      logger.info('Connection failed', err)
    });
  } catch(err) {
    logger.info('Connection failed', err)
  }
})()


module.exports = {
  KafkaProducer,
  KafkaConsumerGroup,
  SqlTableBasedDuplicateMessageDetector,
  MessageConsumer,
  MessageProducer,
  eventMessageHeaders,
  IdGenerator,
  SwimlaneDispatcher,
  ObservableQueue,
  DomainEventPublisher,
  DomainEventDispatcher,
  DefaultChannelMapping,
  DefaultDomainEventNameMapping
};