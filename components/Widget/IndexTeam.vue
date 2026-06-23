<template>
  <section id="team">
    <h2>Наша команда</h2>
    <ModuleTeamWrapper>
      <ModuleTeamItem :photoSrc="`persona1`">
        <template v-slot:surname>Поляков</template>
        <template v-slot:name>Иван Викторович</template>
        <template v-slot:role>Учредитель</template>
        <template v-slot:description>
          Архимандрит Агафодор (Поляков) — священник Русской Православной
          Церкви.
          <UiList>
            <li>Клирик Богоявленского кафедрального собора г. Горловка;</li>
            <li>Магистр Богословия;</li>
            <li>Председатель Общественного Совета г. Горловка;</li>
            <li>Руководитель Молодёжного отдела Горловской Епархии;</li>
            <li>
              Ответственный за больничное, госпитальное и волонтёрское служение
              в Горловской епархии;
            </li>
            <li>
              Руководитель и духовник епархиального сестричества им. святого
              мученика Евгения врача;
            </li>
            <li>Преподаватель кафедры философии ДГПУ;</li>
            <li>
              Руководитель филиала АНО ЦКБ Святителя Алексия митрополита
              Московского центра протезирования и медицинской адаптации в
              Горловке.
            </li>
          </UiList>
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona2`">
        <template v-slot:surname>Абросимов</template>
        <template v-slot:name>Дмитрий Викторович</template>
        <template v-slot:role>Учредитель</template>
        <template v-slot:description>
          <UiList>
            <li>Священник Русской Православной Церкви;</li>
            <li>Клирик Богоявленского кафедрального собора г. Горловка;</li>
            <li>
              Руководитель Отдела по церковной благотворительности и социальному
              служению Горловской Епархии;
            </li>
            <li>Руководитель Миссионерского отдела Горловской Епархии;</li>
            <li>Лектор российского общества "Знаниие";</li>
            <li>Магистр Богословия.</li>
          </UiList>
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona3`">
        <template v-slot:surname>Ильчук</template>
        <template v-slot:name>Михаил Вадимович</template>
        <template v-slot:role>Учредитель</template>
        <template v-slot:description>
          <UiList>
            <li>Диакон Русской Православной Церкви;</li>
            <li>Клирик Богоявленского кафедрального собора г. Горловка.</li>
          </UiList>
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona4`" :type="'line'">
        <template v-slot:surname>Хорьяков</template>
        <template v-slot:name>Святослав Владимирович</template>
        <template v-slot:role>Директор</template>
        <template v-slot:description>
          <UiList>
            <li>
              Имеет два высших педагогических образования, одно из которых
              преподаватель истории, второе - организатор физкультуры и спорта;
            </li>
            <li>Преподаватель ФГБОУ ВО «ДГПУ им. В. Шаталова».</li>
          </UiList>
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona10`" :type="'line'">
        <template v-slot:surname>Шуклин</template>
        <template v-slot:name>Роман Олегович</template>
        <template v-slot:role>Координатор проекта «Пульс Добра»</template>
        <template v-slot:description>
          <UiList>
            <li>Диакон Русской Православной Церкви;</li>
            <li>Клирик Богоявленского кафедрального собора г. Горловка;</li>
            <li>куратор донорского движения «Пульс Добра»;</li>
            <li>
              Заместитель руководителя Отдела миссионерского служения Горловской
              епархии.
            </li>
          </UiList>
        </template>
      </ModuleTeamItem>
    </ModuleTeamWrapper>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
