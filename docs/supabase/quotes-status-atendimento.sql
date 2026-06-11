ALTER TABLE quotes
ADD COLUMN IF NOT EXISTS status_atendimento TEXT DEFAULT 'nova_cotacao';
