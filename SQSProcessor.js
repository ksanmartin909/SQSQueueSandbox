exports.handler = async (event) => {
    console.log('Processor')
    console.log({event: event.Records})
    for (const { messageId, body } of event.Records) {
        console.log('SQS message %s: %j', messageId, body);
    }
    return `Successfully processed ${event.Records.length} messages.`;
};
