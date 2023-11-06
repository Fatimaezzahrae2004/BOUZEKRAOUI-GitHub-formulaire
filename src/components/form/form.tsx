import React, { useState, FormEvent, ChangeEvent } from 'react';
import './form.css';
import Simple from '../simpleInput/simple';

const FormComponent: React.FC = () => {
  const [formTest, setFormTest] = useState({
    testNameSymbols: false,
  });

  const [formData, setFormData] = useState({
    nom: '',
    prénom: '',
    
    age: '',
    email: '',
    telephone: '',
    adresse: '',
    ObjectifProfessionel: '',
    diplome:'',
    langues:'',
    langagesdeprogrammation:'',
    competencestechniques:'',
  });

  const [ageAsNumber, setAgeAsNumber] = useState<number | null>(18);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    let num = 0;

    if (event.target.value === '') {
      num = 18;
    } else {
      num = parseInt(event.target.value, 10);
      if (num < 18) {
        num = 18;
      }
    }
    setAgeAsNumber(num);
  };
  
  const testName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(event);
    console.log(formTest.testNameSymbols);
    if (
      event.target.value ===
      'a,z,e,r,t,y,u,i,o,p,q,s,d,f,g,h,j,k,l,m,w,x,c,c,v,b,n,A,Z,E'
    ) {
      setFormTest({
        testNameSymbols: false,
      });
    } else {
      setFormTest({
        testNameSymbols: true,
      });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    // Vérifie si le nom est vide ou s'il ne contient que des majuscules
    if (formData.nom.trim() === '' || !/^[A-Z]+$/.test(formData.nom)) {
      alert('Le nom est obligatoire et doit être en majuscules.');
    } else if (formData.prénom.trim() === '' || !/^[A-Z][a-z]*$/.test(formData.prénom)) {
      alert('Le prénom est obligatoire et doit commencer par une majuscule.');
    } else if (formData.age.trim() === '' || parseInt(formData.age, 10) < 19) {
      alert("L'âge doit être supérieur ou égal à 19.");
    } else if (!emailPattern.test(formData.email.trim())) {
      alert('L\'adresse email n\'est pas valide. Elle doit contenir "@" et avoir un format valide.');
    } else {
      // Le formulaire est valide, vous pouvez soumettre les données
      alert('Formulaire soumis avec ces données : ' + JSON.stringify(formData));
    }
  };
  
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <span className="title">Informations personnelles</span>
        <fieldset>
        <div className="input-box" >
        <Simple
          labelName="Nom"
          value={formData.nom}
          handleFunction={handleChange}
          testFunction={testName}
          source="nom"
         
        />
        <Simple
          labelName="Prénom"
          value={formData.prénom}
          handleFunction={handleChange}
          testFunction={testName}
          source="prénom"
          
        />
        
        <Simple
          labelName="Age"
          value={formData.age}
          handleFunction={handleChange}
          testFunction={testName}
          source="age"
        />
        <Simple
          labelName="Email"
          value={formData.email}
          handleFunction={handleChange}
          testFunction={testName}
          source="email"
        />
        <Simple
          labelName="Téléphone"
          value={formData.telephone}
          handleFunction={handleChange}
          testFunction={testName}
          source="telephone"
        />
        <Simple
          labelName="Adresse"
          value={formData.adresse}
          handleFunction={handleChange}
          testFunction={testName}
          source="adresse"
        />
        </div>
        
        <div className="gender-details">
          <p>
            <label>Sexe :</label>
            <input
              type="radio"
              id="homme"
              name="sexe"
              value="homme"
              className="maclass"
              required
            />
            <label htmlFor="homme">homme</label>
            <input
              type="radio"
              id="femme"
              name="sexe"
              value="femme"
              className="maclass"
              required
            />
            <label htmlFor="femme">femme</label>
          </p>
          <p>
            <label>Situation :</label>
            <input
              type="radio"
              id="célibataire"
              name="situation"
              value="célibataire"
              className="maclass"
              required
            />
            <label htmlFor="célibataire">célibataire</label>
            <input
              type="radio"
              id="marié"
              name="situation"
              value="marié"
              className="maclass"
              required
            />
            <label htmlFor="marié">marié</label>
          </p>
        </div>
        <div>
          <br />
        </div>
        </fieldset>
        <div className="informations-professionnelles">
          <span className="title">Informations professionnelles</span>
          <fieldset>
          
            <legend>Objectif Professionnel</legend>
            <div className="input-box1">
              <textarea
                name="ObjectifProfessionel"
                value={formData.ObjectifProfessionel}
                onChange={handleChange}
                rows={4}
                cols={90}
                placeholder="Parlez de votre Objectif Professionnel"
              ></textarea>
            </div>
          </fieldset>
          
        </div>
        <hr />
        <div>
          <br />
        </div>
        <div className="column">
          <div className="title" id="diplome">
            <legend>Diplôme</legend>
          </div>
          <div className="select-box">
            <select>
              <option>DUT</option>
              <option>Master</option>
              <option>License</option>
              <option>Doctorat</option>
              <option>Ingénieur</option>
            </select>
          </div>
        </div>
        <hr />
        <div>
            
          <br />
        </div>
        
        <div className="langue-option">
          <legend>Langues</legend>
          <div className="langue">
            <input
              type="checkbox"
              id="check-langue"
              name="langue"
              defaultChecked
            />
            <label htmlFor="check-langue">Français</label>
          </div>
          <div className="langue">
            <input
              type="checkbox"
              id="check-langue"
              name="langue"
              defaultChecked
            />
            <label htmlFor="check-langue">Anglais</label>
          </div>
          <div className="langue">
            <input
              type="checkbox"
              id="check-langue"
              name="langue"
              defaultChecked
            />
            <label htmlFor="check-langue">Espagnol</label>
          </div>
          <div style={{ textAlign: 'center' }}>
            {/* Contenu centré */}
          </div>
          <div>
            <br />
          </div>
          <div className="langue">
            <input
              type="checkbox"
              id="check-langue"
              name="langue"
              defaultChecked
            />
            <label htmlFor="check-langue">Autre</label>
          </div>
        </div>
        <hr />
        <div className="langage-option">
          <legend>Languages de programmation</legend>
          <div className="langage">
            <input
              type="checkbox"
              id="check-langage"
              name="langage"
              defaultChecked
            />
            <label htmlFor="check-langage">HTML</label>
          </div>
          <div className="langage">
            <input
              type="checkbox"
              id="check-langage"
              name="langage"
              defaultChecked
            />
            <label htmlFor="check-langage">CSS</label>
          </div>
          <div className="langage">
            <input
              type="checkbox"
              id="check-langage"
              name="langage"
              defaultChecked
            />
            <label htmlFor="check-langage">C</label>
          </div>
          <div className="langage">
            <input
              type="checkbox"
              id="check-langage"
              name="langage"
              defaultChecked
            />
            <label htmlFor="check-langage">Java</label>
          </div>
        </div>
        <hr />
        <div style={{ textAlign: 'center' }}>
          {/* Contenu centré */}
        </div>
        <div>
          <br />
        </div>
        <legend>Compétences techniques</legend>
        <div className="input-box1">
          <textarea
            id="competence"
            name="competence"
            rows={4}
            cols={90}
            placeholder="Parlez de vos compétences techniques"
          ></textarea>
        </div>
        
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default FormComponent;


