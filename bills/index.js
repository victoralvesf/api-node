import express from 'express';
import create from './services/create';
import remove from './services/remove';
import list from './services/list';

const router = express.Router();

// Listar contas a pagar
router.get('/', list);
// Criar novas contas a pagar
router.post('/', create);
// Deletar contas a pagar
router.delete('/:id', remove);

export default router;