import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    hamur: '',
    extra: [],
    note: '',
    miktar: 1
  });
  const miktar = 1;
  const tutar = 85.5;
  const secimler = formData.extra.length*5;
  const topTutar = tutar+ secimler;
    const malzemeler =["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Zeytin", "Ananas", "Kabak"
    ]

    return (
      <Container>
      <div className="header-link">
      <Link to="/"exact className="text-decoration-none text-white" >
        <strong>Anasayfa</strong> 
      </Link> {" - "}
      <Link to="/orderpage"exact className="text-decoration-none text-white">
        Sipariş Oluştur
      </Link> 
      </div>
      <Form >
         <h4>Positon Absolute Acı Pizza</h4>
         <div className="food-price">
            <span className="item-price"><strong>{tutar}₺</strong></span>
            <span>4.9</span>
            <span>(200)</span>
          </div>
         <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
         <div className="form-item1">
         <div className="boyut">
         <FormGroup tag="fieldset">
         <legend>Boyut Seç <span style={{color: "red"}}>*</span></legend>
         <FormGroup >
           <Input type="radio" id="Küçük" name="boyut" value="Küçük"/>
           <Label htmlFor="Küçük">Küçük</Label>
         </FormGroup>
         <FormGroup >
         <Input type="radio" id="Orta" name="boyut" value="Orta"/>
           <Label htmlFor="Orta">Orta</Label>
         </FormGroup>
         <FormGroup >
         <Input type="radio" id="Büyük" name="boyut" value="Büyük"/>
           <Label htmlFor="Büyük">Büyük</Label>
         </FormGroup>
         </FormGroup>
         </div>
         <div className="hamur">
         <FormGroup>
         <legend>Hamur Seç <span style={{color: "red"}}>*</span></legend>
          <Input type="select" name="hamur">
            <option>--Hamur Kalınlığı--</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </Input>
        </FormGroup>
         </div>
         </div>
         <Label >Ek Malzemeler</Label>
         <p>En az 4, en fazla 10 malzeme seçmelisiniz. 5₺</p>
        <Row >
          {malzemeler.map((item, i) => (
            <Col md={4} key={i}>
              <FormGroup check >
                <Input
                  type="checkbox" name="extra" id={item}
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
           />
        </FormGroup>
        <div className="siparis">
        <Row className="miktar">
          <Col md="2">
            <Button color="warning">-</Button>
          </Col>
          <Col md="2">
            <strong>{miktar}</strong>
          </Col>
          <Col md="2">
            <Button color="warning">+</Button>
          </Col>
        </Row>
        <Card >
          <CardBody>
            <h5>Sipariş Toplamı</h5>
            <p>Seçimler: {secimler}₺</p>
            <p><strong>Toplam: {topTutar}₺</strong></p>
          </CardBody>
        </Card>
        </div>
        <Button color="warning">SİPARİŞ VER</Button>
      </Form>
      </Container>
    )
  }
  
export default OrderPage;