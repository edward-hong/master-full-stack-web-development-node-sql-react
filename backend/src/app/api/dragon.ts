import { Router, Request, Response } from 'express'

const router = Router()

router.get('/new', (req: Request, res: Response) => {
  res.json({ dragon: req.app.locals.engine.newDragon() })
})

export default router
