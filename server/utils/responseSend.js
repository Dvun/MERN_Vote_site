exports.responseSend = (res, status, message) => {
  return res.status(status).json({message: message})
}