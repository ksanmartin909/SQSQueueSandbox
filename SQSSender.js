const { SQSClient, SendMessageBatchCommand } = require("@aws-sdk/client-sqs");

exports.handler = async (event) => {
  const client = new SQSClient({ region: "us-east-1" });

  const Id = event.Id;
  const MessageBody = event.MessageBody;

  const params = {
    Entries: [{ Id, MessageBody }],
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/346431749829/MyFirstQueue",
  };
  const message = new SendMessageBatchCommand(params);

  try {
    await client.send(message);
  } catch (error) {
    console.log({ error });
  }

    return "...done doing somethin";
};
