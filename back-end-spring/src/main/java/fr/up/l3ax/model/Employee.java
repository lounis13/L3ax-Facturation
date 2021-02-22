package fr.up.l3ax.model;


import lombok.Data;
import lombok.Generated;

import javax.persistence.*;

/***
 *  La notation  @Data  est  une  annotation Lombok.
 *  Nul besoin d’ajouter les getters et les setters.
 *  La librairie Lombok s’en charge pour nous. Très
 *  utile pour alléger le code.
 *
 *
 *  La  notation  @Entity  est  une  annotation qui
 *  indique que la classe correspond à une table de
 *  la base de données.
 *
 * lA notation @Table(name=”employees”) indique le
 * nom de la table associée.
 */
@Data
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    private String mail;

    private String password;

}
