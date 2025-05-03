import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

function OrderPage({setForm}) {
  const initialFormData = {
    name: '',
    hamur: '',
    extra: [],
    note: '',
    miktar: 1,
    boyut:''
  };
  const [formData, setFormData] = useState(initialFormData);
  const tutar = 85.5;
  const secimler = formData.extra.length*5;
  const topTutar = (tutar+ secimler)*formData.miktar;
  const malzemeler =["Pepperoni", "Sosis", "Kanada Jambonu", 
                     "Tavuk Izgara", "Soğan", "Domates", 
                     "Mısır", "Sucuk", "Jalepeno", "Sarımsak", 
                     "Biber", "Zeytin", "Ananas", "Kabak"]
  const artır = () => {
  setFormData({ ...formData, miktar: formData.miktar + 1 });
  };

  const azalt = () => {
  if (formData.miktar > 1) {
    setFormData({ ...formData, miktar: formData.miktar - 1 });
    }
  };

  const isValid = formData.name.trim().length >= 3 &&
                formData.boyut &&
                formData.hamur &&
                formData.extra.length >= 4 &&
                formData.extra.length <= 10;

  const handleChange = (event) => {
  const { name, value, type, checked } = event.target;

  if (type === 'checkbox') {
    if (checked) {
      setFormData({ ...formData, [name]: [...formData.extra, value] });
      } else {
        setFormData({ ...formData, [name]: formData.extra.filter(item => item !== value) });
        }
    } else {
      setFormData({ ...formData, [name]: value });
      }
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    axios.post("https://reqres.in/api/pizza", formData, {
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    })
    .then(res => {
      setForm(res.data);
      history.push("/success"); 

    })
    .catch(err => console.error(err.message));

  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="form">
         <img src="images/iteration-2-images/pictures/form-banner.png" alt="" />
         <div>
           <Link to="/" className="text-decoration-none text-black" >
           <strong>Anasayfa</strong> 
           </Link> {" - "}
           <Link to="/orderpage" className="text-decoration-none">
            <span style={{color:"red"}}>Sipariş Oluştur</span>
           </Link> 
          </div>
         <h4>Positon Absolute Acı Pizza</h4>
         <div className="food-price">
            <span className="item-price"><strong>{tutar}₺</strong></span>
            <span>4.9</span>
            <span>(200)</span>
          </div>
         <p>Frontend Dev olarak hala position:
          absolute kullanıyorsan bu çok acı pizza 
          tam sana göre. Pizza, domates, peynir ve 
          genellikle çeşitli diğer malzemelerle kaplanmış, 
          daha sonra geleneksel olarak odun ateşinde bir 
          fırında yüksek sıcaklıkta pişirilen, 
          genellikle yuvarlak, düzleştirilmiş mayalı 
          buğday bazlı hamurdan oluşan italyan kökenli 
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
          
         <div className="form-item1">
         <div className="boyut">
         <FormGroup tag="fieldset">
         <legend>Boyut Seç <span style={{color: "red"}}>*</span></legend>
         <FormGroup >
           <Input 
             type="radio" 
             id="Küçük" 
             name="boyut" 
             value="Küçük" 
             checked={formData.boyut === "Küçük"} 
             onChange={handleChange}/>
           <Label htmlFor="Küçük">Küçük</Label>
         </FormGroup>
         <FormGroup >
         <Input 
            type="radio" 
            id="Orta" 
            name="boyut" 
            value="Orta" 
            checked={formData.boyut === "Orta"} 
            onChange={handleChange}/>
           <Label htmlFor="Orta">Orta</Label>
         </FormGroup>
         <FormGroup >
         <Input 
            type="radio" 
            id="Büyük" 
            name="boyut" 
            value="Büyük" 
            checked={formData.boyut === "Büyük"} 
            onChange={handleChange}/>
           <Label htmlFor="Büyük">Büyük</Label>
         </FormGroup>
         </FormGroup>
         </div>
         <div className="hamur">
         <FormGroup>
         <legend>Hamur Seç <span style={{color: "red"}}>*</span></legend>
          <Input 
            type="select" 
            name="hamur" 
            value={formData.hamur} 
            onChange={handleChange}>
            <option value="">--Hamur Kalınlığı--</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </Input>
        </FormGroup>
         </div>
         </div>
         <Label ><legend>Ek Malzemeler</legend></Label>
         <p>En az 4, en fazla 10 malzeme seçmelisiniz. 5₺</p>
        <Row >
          {malzemeler.map((item, i) => (
            <Col md={4} key={i}>
              <FormGroup check >
                <Input
                  type="checkbox" 
                  name="extra" 
                  id={item} 
                  value ={item} 
                  checked={formData.extra.includes(item)}
                  onChange={handleChange}
                />
                <Label htmlFor={item}>{item}</Label>
              </FormGroup>
            </Col>
          ))}
        </Row>
        <FormGroup>
           <Label htmlFor="name">Ad Soyad
           </Label>
           <Input
             id="name"
             name="name"
             placeholder="Adınızı Giriniz"
             type="text"
             value={formData.name}
             onChange={handleChange}
           />
        </FormGroup>
        <FormGroup>
           <Label htmlFor="note">
             Sipariş Notu
           </Label>
           <Input
             id="note"
             name="note"
             type="textarea"
             placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
             value={formData.note}
             onChange={handleChange}
           />
        </FormGroup>
      <div className="siparis">
        <Row className="miktar">
          <Col md="2">
            <Button color="warning" onClick={azalt}>-</Button>
          </Col>
          <Col md="2" >
            <strong>{formData.miktar}</strong>
          </Col>
          <Col md="2">
            <Button color="warning" onClick={artır}>+</Button>
          </Col>
        </Row>
        <Card >
          <CardBody >
            <h5>Sipariş Toplamı</h5>
            <p style={{display: "flex",
            justifyContent: "space-between"}}>Seçimler: {secimler}₺</p>
            <p><strong>Toplam: {topTutar}₺</strong></p>
            <Button color="warning" disabled={!isValid} type="submit">SİPARİŞ VER</Button>
          </CardBody>
        </Card>
        </div> 
      </Form>
    </Container>  
  )
}
  
export default OrderPage;