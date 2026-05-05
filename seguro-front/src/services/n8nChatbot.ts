export type N8nChatbotRequest = {
  phone: string;
  message: string;
};

export type N8nChatbotResponse = {
  response: string;
};

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL?.trim() ?? '';

export function hasN8nWebhookUrl() {
  return N8N_WEBHOOK_URL.length > 0;
}

export async function sendChatbotMessage({
  phone,
  message,
}: N8nChatbotRequest): Promise<N8nChatbotResponse> {
  if (!N8N_WEBHOOK_URL) {
    throw new Error('Configure a variável VITE_N8N_WEBHOOK_URL para ativar o chatbot.');
  }

  const response = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, message }),
  });

  if (!response.ok) {
    throw new Error('Não foi possível falar com o chatbot agora.');
  }

  const data = (await response.json()) as Partial<N8nChatbotResponse>;

  return {
    response:
      typeof data.response === 'string' && data.response.trim().length > 0
        ? data.response
        : 'Recebi sua resposta. Vamos continuar a cotação.',
  };
}