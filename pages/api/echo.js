//localhost:3000/api/echo?massage=hallo отримаємо {"massage":"hallo"}
export default function echo(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ massage: req.query.massage ?? "Base message" }));
}
